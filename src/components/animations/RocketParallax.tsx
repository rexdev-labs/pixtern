"use client";
import { Box, Image } from "@chakra-ui/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function RocketParallax() {
  const parallaxRef = useRef(null);
  const balloonCloudPointRef = useRef<HTMLImageElement | null>(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      // Default
      mm.add("(min-width: 1280px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: parallaxRef.current,
            start: "top bottom",
            end: "+=1700",
            scrub: true,
            // markers: true,
          },
        });

        tl.fromTo(".group1", { y: 3200 }, { y: -150, ease: "none" }, 0);
        tl.fromTo(".cloud-2", { y: 2380 }, { y: 600, ease: "none" }, 0);

        gsap.to(".rocket", {
          y: 15,
          duration: 3,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      });

      // Ipad
      mm.add("(min-width: 601px) and (max-width: 1279px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: parallaxRef.current,
            start: "top bottom",
            end: "=+1000",
            scrub: true,
            // markers: true,
          },
        });

        tl.fromTo(".group1", { y: 2480 }, { y: 145, ease: "none" }, 0);
        tl.fromTo(".cloud-2", { y: 1650 }, { y: 800, ease: "none" }, 0);

        gsap.to(".rocket", {
          y: 15,
          duration: 3,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      });

      // HP
      mm.add("(max-width: 600px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: parallaxRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            // markers: true,
          },
        });

        tl.fromTo(".group1", { y: 1528 }, { y: 145, ease: "none" }, 0);
        tl.fromTo(".cloud-2", { y: 1100 }, { y: 700, ease: "none" }, 0);

        gsap.to(".rocket", {
          y: 12,
          duration: 2.5,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      });
    },
    { scope: parallaxRef }
  );

  useGSAP(
    () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".airballoon",
          start: "center center",
          endTrigger: "#balloon-cloud-point",
          end: (_) => {
            const rect = balloonCloudPointRef.current!.getBoundingClientRect();
            return `top center+=${rect.height * 1.3}px`;
          },
          pin: true,
        },
      });
    },
    { scope: parallaxRef }
  );

  useGSAP(
    () => {
      let mm = gsap.matchMedia();
      const rect = balloonCloudPointRef.current!.getBoundingClientRect();

      mm.add("(min-width: 1281px)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".airballoon",
              start: "top center",
              endTrigger: "#balloon-cloud-point",
              end: `top center+=${rect.height * 1.3}px`,
              scrub: true,
              pin: true,
              anticipatePin: 1,
            },
          })
          .fromTo(
            ".airballoon",
            {
              x: "130vh",
              y: "0",
              rotate: 8,
            },
            {
              x: "0",
              y: "-110vh",
              rotate: -5,
              ease: "none",
            }
          );
      });

      mm.add("(min-width: 601px) and (max-width: 1279px)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".airballoon",
              start: "top center",
              endTrigger: "#balloon-cloud-point",
              end: `top center+=${rect.height * 1.3}px`,
              scrub: true,
              pin: true,
              anticipatePin: 1,
            },
          })
          .fromTo(
            ".airballoon",
            {
              x: "50vh",
              y: "0",
              rotate: 8,
            },
            {
              x: "0",
              y: "-80vh",
              rotate: -5,
              ease: "none",
            }
          );
      });

      mm.add("(max-width: 600px)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".airballoon",
              start: "top center",
              endTrigger: "#balloon-cloud-point",
              end: `top center+=${rect.height * 1.3}px`,
              scrub: true,
              pin: true,
              anticipatePin: 1,
            },
          })
          .fromTo(
            ".airballoon",
            {
              x: "30vh",
              y: "0",
              rotate: 8,
            },
            {
              x: "0",
              y: "-60vh",
              rotate: -5,
              ease: "none",
            }
          );
      });
    },
    { scope: parallaxRef }
  );

  useGSAP(
    () => {
      gsap.fromTo(
        ".woooosh-text",
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".woooosh-text",
            start: "top center",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: parallaxRef }
  );

  return (
    <Box
      ref={parallaxRef}
      id="rocket-parallax"
      position="absolute"
      top="0"
      left={0}
      w="100%"
      h={{
        base: "150vh",
        sm: "150vh",
        md: "160vh",
        lg: "220vh",
        xl: "220vh",
        "2xl": "300vh",
      }}
      bg="transparent"
      pointerEvents="none"
      zIndex={20}
      overflow="hidden"
    >
      {/* Group Cloud + Rocket */}
      <Box className="group1" position="absolute" top="0" w="100%">
        <Image src="/images/cloud/cloud1.svg" w="100%" h="auto" alt="" />
        <Box
          className="rocket"
          position="absolute"
          top={{
            base: "-4",
            xl: "8",
          }}
          left="49.5%"
          transform="translateX(-50%)"
        >
          <Image
            src="/images/cloud/rocket3.svg"
            alt="Rocket"
            w={{
              base: "100px",
              md: "180px",
              xl: "200px",
              "2xl": "260px",
            }}
            filter="drop-shadow(0 4px 8px rgba(0,0,0,0.1))"
          />
        </Box>
      </Box>

      {/* Cloud 2 */}
      <Box className="cloud-2" position="relative" w="100%">
        <Image src="/images/cloud/cloud2.svg" w="100%" h="auto" alt="" />

        <Box
          position="absolute"
          top="34%"
          left="15%"
          transform="translateX(50%)"
          zIndex={3}
        >
          <Image
            src="/images/cloud/cloudsmall.png"
            alt="Small Cloud"
            w={{
              base: "60px",
              sm: "80px",
              md: "100px",
              lg: "120px",
              xl: "140px",
              "2xl": "160px",
            }}
          />
        </Box>
        <Box
          position="absolute"
          top="64%"
          right="15%"
          transform="translateX(50%)"
          zIndex={3}
        >
          <Image
            src="/images/cloud/cloudsmall.png"
            alt="Small Cloud"
            w={{
              base: "60px",
              sm: "80px",
              md: "100px",
              lg: "120px",
              xl: "140px",
              "2xl": "160px",
            }}
          />
        </Box>
      </Box>

      {/* Airballoon */}
      <Image
        className="airballoon"
        position="absolute"
        top={{
          base: "70.5%",
          sm: "68.5%",
          md: "66%",
          lg: "65%",
          xl: "70%",
          "2xl": "60%",
        }}
        left={{
          base: "24%",
          xl: "22.5%",
        }}
        transform="translateX(-50%)"
        zIndex={2}
        src="/images/cloud/airballon.png"
        alt="Air Balloon"
        w={{
          base: "80px",
          sm: "100px",
          md: "120px",
          lg: "140px",
          xl: "160px",
          "2xl": "180px",
        }}
        filter="drop-shadow(0 4px 8px rgba(0,0,0,0.1))"
      />

      {/* Cloud Point + Text */}
      <Box
        position="absolute"
        bottom="0"
        left="15%"
        transform="translateX(50%)"
        zIndex={3}
      >
        <Image
          ref={balloonCloudPointRef}
          id="balloon-cloud-point"
          src="/images/cloud/cloudsmall.png"
          alt="Small Cloud"
          w={{
            base: "60px",
            sm: "80px",
            md: "100px",
            lg: "120px",
            xl: "140px",
            "2xl": "160px",
          }}
        />

        <Box
          className="woooosh-text"
          position="absolute"
          bottom="75%"
          left="72%"
          opacity={0}
          transform="rotate(-5.47deg)"
          color="black"
          fontSize={{
            base: "xl",
            md: "2xl",
            lg: "3xl",
          }}
          fontFamily="Bestime"
          fontWeight="bold"
        >
          Wooooosh!
        </Box>
      </Box>
    </Box>
  );
}
