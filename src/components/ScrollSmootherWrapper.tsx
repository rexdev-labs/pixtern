"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
<<<<<<< Updated upstream
=======
import { TextPlugin } from "gsap/TextPlugin";
>>>>>>> Stashed changes

gsap.registerPlugin(
  useGSAP,
  ScrollTrigger,
  ScrollSmoother,
  SplitText,
<<<<<<< Updated upstream
  ScrambleTextPlugin
=======
  ScrambleTextPlugin,
  TextPlugin
>>>>>>> Stashed changes
);

export default function ScrollSmootherWrapper({
  children,
<<<<<<< Updated upstream
}: {
  children: ReactNode;
}) {
=======
}: Readonly<{
  children: ReactNode;
}>) {
>>>>>>> Stashed changes
  const smoothWrapperRef = useRef<HTMLDivElement | null>(null);
  const smoothContentRef = useRef<HTMLDivElement | null>(null);
  const smoothScrollerRef = useRef<ScrollSmoother | null>(null);

  useGSAP(
    () => {
      smoothScrollerRef.current = ScrollSmoother.create({
        wrapper: smoothWrapperRef.current!,
        content: smoothContentRef.current!,
        smooth: 4,
        effects: true,
        normalizeScroll: true,
        ignoreMobileResize: true,
      });

      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const targetId = link.getAttribute("href");
          if (targetId) {
            smoothScrollerRef.current!.scrollTo(
              targetId,
              true,
              "center center"
            );
          }
        });
      });

      const handleResize = () => {
        if (smoothScrollerRef.current) {
          smoothScrollerRef.current.refresh();
        }
      };

      window.addEventListener("resize", handleResize);
      return () => {
        if (smoothScrollerRef.current) {
          smoothScrollerRef.current.kill();
        }
        window.removeEventListener("resize", handleResize);
      };
    },
    { scope: smoothWrapperRef }
  );

  return (
    <div ref={smoothWrapperRef} id="smooth-wrapper">
      <div ref={smoothContentRef} id="smooth-content">
        {children}
      </div>
    </div>
  );
}
