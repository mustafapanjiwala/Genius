import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources";
("openai/resources");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const instructionMessage: ChatCompletionMessageParam = {
  role: "system",
  content:
    "you are a code generator. You must answer only in markdown code snippets. Use code comments for explanations",
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!openai.apiKey) {
      return new NextResponse("OpenAI API key not configured", { status: 500 });
    }
    if (!messages) {
      return new NextResponse("No messages provided", { status: 400 });
    }
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages],
    });

    return NextResponse.json(response.choices[0].message);
  } catch (err) {
    console.log("[CODE_ERROR]", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
