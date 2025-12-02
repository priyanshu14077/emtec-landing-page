'use client';

import type { ReactNode } from "react";
import { useEffect } from "react";
import Lenis from "lenis";

interface ISmoothScrollProviderProps {
  children: ReactNode;
}

export const SmoothScrollProvider = ({
  children,
}: ISmoothScrollProviderProps) => {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.09,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};


