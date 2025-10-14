"use client";

import { Box, Heading, Image, Text } from "@chakra-ui/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin, SplitText);

export default function () {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const splitDesc = new SplitText(".text-desc .split-paragraph", {
        type: "lines",
      });

      gsap.set(splitDesc.lines, { opacity: 0, y: 20 });
      gsap.set(".scramble-name", { text: "" });
      gsap.set(".jobs", { opacity: 0, y: 50 });
      gsap.set(".text-about", { opacity: 0, y: 50 });
      gsap.set(".ornamen-first", { opacity: 0, y: 50, scale: 0.9 });
      gsap.set(".ornamen-second", { opacity: 0, y: 50, scale: 0.9 });

      document.fonts?.ready?.then(() => {
        ScrollTrigger.create({
          trigger: ".card-about-team",
          start: "top 95%",
          toggleActions: "play reverse play reverse",
          animation: gsap
            .timeline()
            .to(
              ".scramble-name",
              {
                duration: 1.2,
                scrambleText: {
                  text: "Jelita (Nama Lengkap)",
                  chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ()",
                  revealDelay: 0.4,
                  speed: 0.4,
                },
              },
              "-=0.4"
            )
            .to(
              ".jobs",
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "sine.out",
              },
              "-=0.4"
            )
            .to(
              ".text-about",
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "sine.out",
              },
              "-=0.4"
            )
            .to(
              splitDesc.lines,
              {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.out",
              },
              "-=0.4"
            )
            .to(
              ".ornamen-first",
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "sine.out",
              },
              "-=0.4"
            )
            .to(
              ".ornamen-second",
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "sine.out",
              },
              "-=0.4"
            ),
        });
      });
    },
    {
      scope: containerRef,
    }
  );
  return (
    <>
      <Box ref={containerRef}>
        <Box className="card-about-team">
          <Box>
            <Heading
              className="scramble-name"
              fontFamily="bestime"
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              fontWeight="light"
              color="brand.text.navy"
            >
              Jelita (Nama Lengkap)
            </Heading>
            <Text
              className="jobs"
              fontFamily="inter"
              fontWeight="reguler"
              fontSize="sm"
            >
              Illustrator, Employee
            </Text>
          </Box>

          <Box
            my="6"
            px="5"
            py="5"
            bg="white"
            border="2.5px solid"
            borderColor="brand.text.navy"
            rounded="xl"
            position="relative"
          >
            <Heading
              className="text-about"
              fontFamily="bestime"
              fontWeight="lighter"
              mb="2"
              color="brand.text.navy"
            >
              About Jelita
            </Heading>
            <Box className="text-desc">
              <Text
                className="split-paragraph"
                fontFamily="inter"
                fontWeight="medium"
                fontSize="sm"
              >
                Hai! I'm Jelita. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500s, when
                an unknown printer took a galley of type and scrambled it to
                make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </Text>
            </Box>

            <Image
              className="ornamen-first"
              src="/images/float/starYellow-profile.png"
              objectFit="cover"
              w="14"
              position="absolute"
              bottom="20%"
              left={{ base: "-6%", lg: "-5%" }}
              overflow="visible"
              zIndex="-10"
            />
            <Image
              className="ornamen-second"
              src="/images/float/ornamen-profile.png"
              objectFit="cover"
              w="16"
              position="absolute"
              top="-7%"
              right={{ base: "-8%", lg: "-5%" }}
              overflow="visible"
              zIndex="10"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
