"use client";

import { Box, Button, Container, Flex } from "@chakra-ui/react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Image } from "../Image";
import gsap from "gsap";

import type { HeroSection } from "@/types/api/homepage/heroSection";

export default function HeroSection({ data }: Readonly<{ data: HeroSection }>) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const floatRefs = useRef<Array<HTMLImageElement | null>>([]);
  const hoverRefs = useRef<Array<HTMLImageElement | null>>([]);

  const setFloatRef = (el: HTMLImageElement | null, idx: number) => {
    floatRefs.current[idx] = el;
  };
  const setHoverRef = (el: HTMLImageElement | null, idx: number) => {
    hoverRefs.current[idx] = el;
  };

  useGSAP(() => {
    if (!containerRef.current) return;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: () => containerRef.current!.offsetHeight + "px bottom",
      end: `bottom`,
      pin: true,
      pinSpacing: false,
      anticipatePin: 1,
    });

    const nodes =
      containerRef.current.querySelectorAll<HTMLElement>(".parallax");
    const bgNodes =
      containerRef.current.querySelectorAll<HTMLElement>(".parallax-bg");

    const nodeX = Array.from(nodes).map((el) =>
      gsap.quickTo(el, "xPercent", { duration: 1.2, ease: "power2.out" })
    );
    const nodeY = Array.from(nodes).map((el) =>
      gsap.quickTo(el, "yPercent", { duration: 1.2, ease: "power2.out" })
    );

    const bgX = Array.from(bgNodes).map((el) =>
      gsap.quickTo(el, "xPercent", { duration: 1.2, ease: "power2.out" })
    );
    const bgY = Array.from(bgNodes).map((el) =>
      gsap.quickTo(el, "yPercent", { duration: 1.2, ease: "power2.out" })
    );

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;

      nodeX.forEach((tween, i) => tween(x * (i * 0.6 + 0.5)));
      nodeY.forEach((tween, i) => tween(y * (i * 0.6 + 0.5)));

      bgX.forEach((tween, i) => tween(x * (i * 1 + 1)));
      bgY.forEach((tween, i) => tween(y * (i * 1 + 1)));
    };

    // Floating effect
    floatRefs.current.forEach((el) => {
      if (!el) return;
      gsap.to(el, {
        y: "+=20",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    // Mousemove listener
    window.addEventListener("mousemove", handleMouseMove);

    // Hover zoom
    const hoverListenerStore: Array<{
      el: HTMLElement;
      enter: EventListener;
      leave: EventListener;
    }> = [];

    hoverRefs.current.forEach((el) => {
      if (!el) return;
      const enter: EventListener = (() => {
        gsap.to(el, {
          scale: 1.12,
          duration: 0.45,
          ease: "power3.out",
        });
      }) as unknown as EventListener;
      const leave: EventListener = (() => {
        gsap.to(el, {
          scale: 1,
          duration: 0.45,
          ease: "power3.out",
        });
      }) as unknown as EventListener;

      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);

      hoverListenerStore.push({ el, enter, leave });
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      hoverListenerStore.forEach(({ el, enter, leave }) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <Box
      id="home"
      as="section"
      position="relative"
      minH="100vh"
      overflow="hidden"
      bg="brand.hero"
      ref={containerRef}
    >
      <Container
        maxW="7xl"
        marginTop={{ base: 20, md: 16, lg: 15 }}
        position="relative"
        zIndex={7}
        py={{ base: 8, md: 14, lg: 20 }}
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          py={10}
          gap={{ base: 10, md: 16, lg: 24 }}
        >
          <Image
            src="/images/logo/logo.png"
            alt="Logo"
            maxW={{ base: "220px", md: "320px", lg: "400px" }}
            mb={{ base: 6, md: 4, lg: 1 }}
            filter="drop-shadow(0px -6px 25px rgba(255,255,255,0.25))"
            className="parallax"
            ref={(el) => setHoverRef(el, 0)}
          />

          <Button
            size={{ base: "sm", md: "sm", lg: "xs" }}
            bg="white"
            color="brand.text.black"
            _hover={{ bg: "gray.200" }}
            rounded="full"
            w={{ base: "100px", md: "110px", lg: 120 }}
            fontFamily="heading"
            borderColor="brand.bg.black"
            borderWidth={2}
            shadow="0px 0px 6px 0px rgba(255,255,255,0.75)"
            className="parallax"
            ref={(el) => {
              // @ts-ignore
              setHoverRef(el as unknown as HTMLImageElement | null, 1);
            }}
          >
            {data.button.title}
          </Button>
        </Flex>
      </Container>

      {/* PLANETS */}
      <Image
        src="/images/float/planet2.png"
        alt="Saturn"
        position="absolute"
        top={{ base: "6%", md: "4%", lg: "1%" }}
        left={{ base: "5%", md: "10%", lg: "16%" }}
        boxSize={{ base: "60px", md: "100px", lg: "150px" }}
        zIndex={4}
        className="parallax"
        ref={(el) => setFloatRef(el, 0)}
      />
      <Image
        src="/images/float/planet1.png"
        alt="Mars"
        position="absolute"
        top={{ base: "10%", md: "12%", lg: "10%" }}
        right={{ base: "0%", md: "6%", lg: "4%" }}
        maxW={{ base: "28", md: "36", lg: "44" }}
        zIndex={4}
        className="parallax"
        ref={(el) => setFloatRef(el, 1)}
      />
      <Image
        src="/images/float/planet3.png"
        alt="Jupiter"
        position="absolute"
        bottom={{ base: "25%", md: "32%", lg: "40%" }}
        right={{ base: "5%", md: "8%", lg: "12%" }}
        maxW={{ base: "28", md: "36", lg: "44" }}
        zIndex={4}
        className="parallax"
        ref={(el) => setFloatRef(el, 2)}
      />
      <Image
        src="/images/float/moon.png"
        alt="Moon"
        position="absolute"
        bottom={{ base: "30%", md: "35%", lg: "45%" }}
        left={{ base: "1%", md: "2%", lg: "3%" }}
        w={{ base: "36", md: "60", lg: "72" }}
        zIndex={4}
        className="parallax"
        ref={(el) => setFloatRef(el, 3)}
      />

      {/* STARS */}
      <Image
        src="/images/float/starpurple.png"
        alt="StarPurple1"
        position="absolute"
        top={{ base: "18%", md: "14%", lg: "12%" }}
        left={{ base: "12%", md: "10%", lg: "8%" }}
        maxW={{ base: "5", md: "6", lg: "7" }}
        rotate="210deg"
        zIndex={3}
        className="parallax"
        ref={(el) => setFloatRef(el, 4)}
      />
      <Image
        src="/images/float/staryellow.png"
        alt="StarYellow"
        position="absolute"
        top={{ base: "70%", md: "52%", lg: "50%" }}
        left={{ base: "4%", md: "2%", lg: "1%" }}
        maxW={{ base: "5", md: "7", lg: "8" }}
        rotate="110deg"
        zIndex={3}
        className="parallax"
        ref={(el) => setFloatRef(el, 5)}
      />
      <Image
        src="/images/float/starred.png"
        alt="StarRed"
        position="absolute"
        top={{ base: "8%", md: "10%", lg: "12%" }}
        right={{ base: "12%", md: "18%", lg: "25%" }}
        maxW={{ base: "5", md: "9", lg: "10" }}
        rotate="170deg"
        zIndex={3}
        className="parallax"
        ref={(el) => setFloatRef(el, 6)}
      />
      <Image
        src="/images/float/starpurple.png"
        alt="StarPurple2"
        position="absolute"
        top={{ base: "30%", md: "35%", lg: "35%" }}
        right={{ base: "18%", md: "20%", lg: "32%" }}
        maxW={{ base: "7", md: "9", lg: "10" }}
        rotate="30deg"
        zIndex={8}
        className="parallax"
        ref={(el) => setFloatRef(el, 7)}
      />
      <Image
        src="/images/float/stargreen.png"
        alt="StarGreen"
        position="absolute"
        top={{ base: "75%", md: "66%", lg: "63%" }}
        right={{ base: "15%", md: "18%", lg: "23%" }}
        maxW={{ base: "4", md: "7", lg: "7" }}
        rotate="90deg"
        zIndex={3}
        className="parallax"
        ref={(el) => setFloatRef(el, 8)}
      />

      {/* CHARACTERS */}
      <Box position="relative" minH="50vh">
        <Image
          src="/images/char/character1.png"
          alt="Character Left"
          position="absolute"
          bottom="0"
          left={{ base: "0%", md: "1%", lg: "1%" }}
          w={{ base: "24", md: "40", lg: "64" }}
          zIndex={6}
          className="parallax-bg"
          ref={(el) => setHoverRef(el, 2)}
        />
        <Image
          src="/images/char/character2.png"
          alt="Character Right"
          position="absolute"
          bottom={{ base: "5%", md: "12%", lg: "20%" }}
          right={{ base: "0%", md: "2%", lg: "0%" }}
          w={{ base: "24", md: "40", lg: "60" }}
          zIndex={6}
          className="parallax-bg"
          ref={(el) => setHoverRef(el, 3)}
        />
        <Image
          src="/images/char/character3.png"
          alt="Character Left"
          position="absolute"
          bottom={{ base: "10%", md: "20%", lg: "45%" }}
          left={{ base: "15%", md: "18%", lg: "20%" }}
          w={{ base: "28", md: "44", lg: "60" }}
          zIndex={5}
          className="parallax-bg"
          ref={(el) => setHoverRef(el, 4)}
        />
        <Image
          src="/images/char/character4.png"
          alt="Character Right"
          position="absolute"
          bottom={{ base: "12%", md: "25%", lg: "50%" }}
          right={{ base: "20%", md: "22%", lg: "25%" }}
          w={{ base: "20", md: "28", lg: "36" }}
          zIndex={5}
          className="parallax-bg"
          ref={(el) => setHoverRef(el, 5)}
        />

        <Image
          src="/images/bg/land.png"
          alt="Planet Surface"
          position="absolute"
          bottom="0"
          left="0"
          w="100%"
          objectFit="cover"
          zIndex={1}
        />
        <Image
          src="/images/bg/cloud.png"
          alt="Cloud"
          position="absolute"
          bottom="0"
          w="100%"
          objectFit="cover"
          zIndex={0}
        />
      </Box>
    </Box>
  );
}
