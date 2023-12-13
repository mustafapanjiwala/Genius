import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Suspense } from "react";

import { ModalProvider } from "@/components/modal-provider";
import { ToasterProvider } from "@/components/toaster-provider";
import { CrispProvider } from "@/components/crisp-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fusion AI",
  description:
    "Explore AI-powered tools for image & video generation, music creation, code generation, and more. Get instant support with our built-in conversational bot. ✨",
  keywords: [
    "Conersation-Bot",
    "AI",
    "Image-Generation",
    "Video-Generation",
    "Music-Creation",
    "Code-Generation",
    "Fusion-AI",
    "FusionAI",
    "Fusion",
    "AI",
    "Fusion-AI-App",
    "FusionAI-App",
    "FusionAI-App",
    "Fusion-AI-App",
    "Fusion-AI-App",
    "FusionAI-App",
    "FusionAI-App",
    "Fusion-AI-App",
    "Fusion-AI-App",
    "FusionAI-App",
    "FusionAI-App",
    "Fusion-AI-App",
    "Fusion-AI-App",
    "FusionAI-App",
    "FusionAI-App",
    "Fusion-AI-App",
    "Fusion-AI-App",
    "FusionAI-App",
    "FusionAI-App",
    "Fusion-AI-App",
    "Fusion-AI-App",
    "FusionAI-App",
    "FusionAI-App",
    "Fusion-AI-App",
    "Fusion-AI-App",
    "FusionAI-App",
    "FusionAI-App",
    "Fusion-AI-App",
    "Fusion-AI-App",
    "FusionAI-App",
    "FusionAI-App",
    "Fusion-AI-App",
    "Fusion-AI-App",
    "FusionAI-App",
    "FusionAI-App",
    "Fusion-AI-App",
    "Fusion-AI-App",
    "FusionAI-App",
    "FusionAI-App",
  ],
  openGraph: {
    images: "https://images2.imgbox.com/27/d5/echhlGbE_o.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider />
        <body className={inter.className}>
          <Suspense>
            <ModalProvider />
            <ToasterProvider />
            {children}
          </Suspense>
        </body>
      </html>
    </ClerkProvider>
  );
}
