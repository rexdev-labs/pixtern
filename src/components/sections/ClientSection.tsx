"use client";

import { Box, Text, Image, Heading } from "@chakra-ui/react";
import { ClientCard } from "../cards/ClientCard";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const feedbacks = [
  {
    username: "Username",
    date: "01-05-2025",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    color: "brand.bg.yellow.primary",
    rating: 4,
    zIndex: 1,
    rotate: 1.9,
    filter: "drop-shadow(-15px -6px 0px rgba(100, 100, 100, 0.6))",
    outline: "1.5px solid #080427",
    left: { base: "auto", md: "23%", lg: "30%" },
    top: { base: "1%", md: "2%", lg: "2%" },
    position: { base: "relative", md: "absolute" },
  },
  {
    username: "Username",
    date: "01-05-2025",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    color: "brand.bg.pink",
    rating: 3,
    zIndex: 2,
    rotate: -0.6,
    filter: "drop-shadow(15px -6px 0px rgba(100, 100, 100, 0.6))",
    outline: "1.5px solid #080427",
    left: { base: "auto", md: "25%", lg: "32%" },
    top: { base: "-4", md: "18%", lg: "18%" },
    position: { base: "relative", md: "absolute" },
  },
  {
    username: "Username",
    date: "01-05-2025",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    color: "brand.bg.blue.sky",
    rating: 5,
    zIndex: 3,
    rotate: -1.8,
    filter: "drop-shadow(-15px 6px 0px rgba(100, 100, 100, 0.6))",
    outline: "1.5px solid #080427",
    left: { base: "auto", md: "20%", lg: "29%" },
    top: { base: "-8", md: "34%", lg: "34%" },
    position: { base: "relative", md: "absolute" },
  },
  {
    username: "Username",
    date: "01-05-2025",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    color: "brand.bg.green.emelard",
    rating: 4,
    zIndex: 4,
    rotate: -2.2,
    filter: "drop-shadow(15px -6px 0px rgba(100, 100, 100, 0.6))",
    outline: "1.5px solid #080427",
    right: { base: "auto", md: "18%", lg: "25%" },
    top: { base: "-12", md: "50%", lg: "50%" },
    position: { base: "relative", md: "absolute" },
  },
  {
    username: "Username",
    date: "01-05-2025",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    color: "#FF6E1D",
    rating: 2,
    zIndex: 5,
    rotate: 2,
    filter: "drop-shadow(15px 6px 0px rgba(100, 100, 100, 0.6))",
    outline: "1.5px solid #080427",
    right: { base: "auto", md: "25%", lg: "31%" },
    bottom: { base: "16", md: "19%", lg: "19%" },
    position: { base: "relative", md: "absolute" },
  },
];

export default function ClientSection() {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const floatingImagesRef = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: isMobile ? 30 : 50,
            scale: isMobile ? 0.9 : 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: isMobile ? 0.5 : 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: isMobile ? "top 90%" : "top 85%",
              end: isMobile ? "top 70%" : "top 60%",
              toggleActions: "play none none reverse",
            },
            delay: index * (isMobile ? 0.1 : 0.15),
          }
        );
      }
    });

    // Animasi untuk floating images
    floatingImagesRef.current.forEach((img, index) => {
      if (img) {
        const isQuote = index === 2 || index === 5; // Quote dan Quote2

        // Animasi muncul saat scroll
        gsap.fromTo(
          img,
          {
            opacity: 0,
            scale: 0,
            rotation: isQuote ? 0 : (index % 2 === 0 ? -180 : 180),
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: isMobile ? 0.6 : 0.8,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: img,
              start: isMobile ? "top 95%" : "top 90%",
              end: isMobile ? "top 80%" : "top 70%",
              toggleActions: "play none none reverse",
            },
            delay: index * (isMobile ? 0.08 : 0.1),
          }
        );

        // Animasi floating dan rotasi continuous (hanya untuk non-quote)
        if (!isQuote) {
          // Animasi floating continuous
          gsap.to(img, {
            y: isMobile ? (index % 2 === 0 ? -8 : -10) : (index % 2 === 0 ? -15 : -20),
            duration: isMobile ? 1.5 + index * 0.2 : 2 + index * 0.3,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: index * 0.2,
          });

          // Animasi rotasi continuous
          gsap.to(img, {
            rotation: isMobile ? (index % 2 === 0 ? 5 : -5) : (index % 2 === 0 ? 10 : -10),
            duration: isMobile ? 2.5 + index * 0.15 : 3 + index * 0.2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: index * 0.15,
          });
        }
      }
    });

    // Handle resize untuk update animasi
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Box position="relative" py={{ base: 12, md: 20, lg: 20 }} overflow="hidden" id="testimoni">
      {/* Background Text */}
      <Text
        fontFamily="cursive"
        fontSize={{ base: "7xl", sm: "8xl", md: "9xl", lg: "9xl" }}
        fontWeight="bold"
        textShadow={
          "1.5px 1.5px 0px  #0804274D, -1.5px -1.5px 0px  #0804274D, 1.5px -1.5px 0px  #0804274D, -1.5px 1.5px 0px  #0804274D"
        }
        color="brand.text.white"
        position="absolute"
        top="45%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex={0}
        whiteSpace="nowrap"
        lineHeight="1"
      >
        <br />
        FEEDBACK
        <br />
        FEEDBACK
        <br />
        FEEDBACK
        <br />
        FEEDBACK
        <br />
        FEEDBACK
        <br />
        FEEDBACK
      </Text>

      {/* Section Heading */}
      <Box textAlign="center" mb={{ base: 10, md: 32, lg: 32 }} zIndex={1} position="relative">
        <Heading
          fontSize={{ base: "5xl", sm: "4xl", md: "7xl", lg: "100px" }}
          fontWeight="extrabold"
          color="brand.text.black"
        >
          CLIENT
        </Heading>
        <Text
          position="absolute"
          fontFamily="cursive"
          fontWeight="extrabold"
          outline="1.5px solid #080427"
          as="span"
          bg="brand.bg.yellow.primary"
          color="brand.text.black"
          px={0}
          w={{ base: 20, sm: 24, md: 28, lg: 32 }}
          py={1}
          top={{ base: "85%", sm: "45%", md: "90%", lg: "50%" }}
          right={{ base: "25%", sm: "25%", md: "32%", lg: "35%" }}
          rotate="-6deg"
          fontSize={{ base: "2xs", sm: "xs", md: "sm", lg: "md" }}
          rounded="full"
        >
          Feedback
        </Text>
      </Box>

      {/* Cards */}

      <Box
        zIndex={1}
        position="relative"
        minH={{ base: "auto", md: "900px", lg: "900px" }}
        display={{ base: "flex", md: "block" }}
        flexDir={{ base: "column", md: "unset" }}
        alignItems={{ base: "center", md: "unset" }}
        gap={{ base: 5, sm: 6, md: 0, lg: 0 }}
        px={{ base: 4, sm: 4, md: 0, lg: 0 }}
      >
        {feedbacks.map((fb, idx) => (
          <ClientCard
            key={idx}
            ref={(el: HTMLDivElement | null) => {
              if (el) cardsRef.current[idx] = el;
            }}
            {...fb}
          />
        ))}
      </Box>

      {/* Floating Images */}

      <Image
        ref={(el) => { floatingImagesRef.current[0] = el; }}
        src="/images/float/starblue.png"
        alt="StarBlue"
        position="absolute"
        top={{ base: "12%", sm: "18%", md: "20%", lg: "20%" }}
        right={{ base: "3%", sm: "25%", md: "16%", lg: "27%" }}
        w={{ base: "35px", sm: "55px", md: "60px", lg: "50px" }}
        zIndex={3}
      />
      <Image
        ref={(el) => { floatingImagesRef.current[1] = el; }}
        src="/images/float/starpurple.png"
        alt="StarPurple"
        position="absolute"
        top={{ base: "25%", sm: "23%", md: "27%", lg: "26%" }}
        left={{ base: "3%", sm: "22%", md: "12%", lg: "23%" }}
        w={{ base: "25px", sm: "35px", md: "40px", lg: "30px" }}
        zIndex={3}
      />
      <Image
        ref={(el) => { floatingImagesRef.current[2] = el; }}
        src="/images/float/quote.png"
        alt="Quote"
        position="absolute"
        top={{ base: "35%", sm: "37%", md: "36%", lg: "37%" }}
        left={{ base: "1%", sm: "26%", md: "18%", lg: "28%" }}
        w={{ base: "50px", sm: "90px", md: "80px", lg: "80px" }}
        zIndex={3}
      />
      <Image
        ref={(el) => { floatingImagesRef.current[3] = el; }}
        src="/images/float/starbase.png"
        alt="StarBase"
        position="absolute"
        top={{ base: "48%", sm: "45%", md: "47%", lg: "46%" }}
        right={{ base: "2%", sm: "26%", md: "18%", lg: "27%" }}
        w={{ base: "50px", sm: "90px", md: "80px", lg: "80px" }}
        zIndex={3}
      />
      <Image
        ref={(el) => { floatingImagesRef.current[4] = el; }}
        src="/images/float/starred.png"
        alt="StarRed"
        position="absolute"
        bottom={{ base: "31%", sm: "33%", md: "35%", lg: "36%" }}
        left={{ base: "3%", sm: "25%", md: "17%", lg: "28%" }}
        w={{ base: "35px", sm: "55px", md: "50px", lg: "50px" }}
        zIndex={3}
      />
      <Image
        ref={(el) => { floatingImagesRef.current[5] = el; }}
        src="/images/float/quote.png"
        alt="Quote2"
        position="absolute"
        bottom={{ base: "20%", sm: "24%", md: "24%", lg: "25%" }}
        right={{ base: "1%", sm: "23%", md: "20%", lg: "26%" }}
        w={{ base: "50px", sm: "90px", md: "80px", lg: "80px" }}
        zIndex={3}
        transform={"scaleX(-1)"}
      />
    </Box>
  );
}
