import { useRef } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Image } from "../Image";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

interface SubHeaderProps {
  text: string;
  enableUnderline?: boolean;
}

export default function SubHeader({
  text,
  enableUnderline = false,
}: Readonly<SubHeaderProps>) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(
    () => {
      gsap.set(headingRef.current, {
        text: "",
      });

      const triggers: ScrollTrigger[] = [];

      document.fonts?.ready?.then(() => {
        const trigger = ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 95%",
          toggleActions: "play reverse play reverse",
          animation: gsap.timeline().to(
            headingRef.current,
            {
              duration: 1.2,
              scrambleText: {
                text: text,
                chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                revealDelay: 0.4,
                speed: 0.4,
              },
            },
            "0"
          ),
        });
        triggers.push(trigger);
      });

      return () => {
        for (const trigger of triggers) {
          trigger.kill();
        }
      };
    },
    { dependencies: [text] }
  );

  return (
    <Box position="relative" ref={containerRef}>
      <Heading
        ref={headingRef}
        as="h2"
        fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}
        fontFamily="bestime"
        color="brand.text.black"
        textAlign="center"
      >
        {text}
      </Heading>
      {enableUnderline && (
        <Image
          position="absolute"
          bottom="-75%"
          left="50%"
          transform={"translateX(-50%)"}
          src="/images/bg/underline-core.png"
          w={{ base: "32", md: "48" }}
          alt="Underline"
          zIndex={2}
        />
      )}
    </Box>
  );
}
