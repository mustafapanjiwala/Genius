"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("e97b15b9-2840-4a32-b92d-7c1824bef71a");
  }, []);
  return null;
};
