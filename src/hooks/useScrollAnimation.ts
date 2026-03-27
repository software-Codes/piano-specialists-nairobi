"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

export function useScrollAnimation<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const isInView = useInView(ref, { once: true });

  return { ref, isInView };
}
