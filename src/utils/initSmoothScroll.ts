"use client";

import { ScrollSmoother } from "gsap/ScrollSmoother";

let smoother: ScrollSmoother | null = null;

export const getSmoother = () => smoother;

export const setSmoother = (instance: ScrollSmoother) => {
  smoother = instance;
};

export const scrollToElement = (
  selector: string,
  smooth: boolean = true,
  position: string = "center center"
) => {
  if (smoother) {
    smoother.scrollTo(selector, smooth, position);
  }
};

export const scrollToTop = (smooth: boolean = true) => {
  if (smoother) {
    smoother.scrollTo(0, smooth);
  }
};

export const scrollToOffset = (offset: number, smooth: boolean = true) => {
  if (smoother) {
    smoother.scrollTo(offset, smooth);
  }
};

export const getScrollY = () => {
  if (smoother) return smoother.scrollTop();
  return 0;
};

export const pauseSmoothing = () => {
  if (smoother) smoother.paused(true);
};

export const resumeSmoothing = () => {
  if (smoother) smoother.paused(false);
};
