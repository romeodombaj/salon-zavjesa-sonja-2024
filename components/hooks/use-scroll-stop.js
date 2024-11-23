"use client";

import { useEffect } from "react";

export default function useScrollStop() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
}
