"use client";

import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { useRef } from "react";
import gsap from "gsap";

interface ProfileCardProps {
  name: string;
  charImage: string;
  realImage?: string;
  bg: string;
  className?: string;
}

export default function ProfileCard({
  name,
  charImage,
  realImage,
  bg,
  className,
}: ProfileCardProps) {
  const cardContainerRef = useRef(null);

  const handleEnter = () => {
    if (cardContainerRef.current) {
      gsap.to(cardContainerRef.current, {
        rotateY: 180,
        duration: 0.8,
        ease: "power2.inOut",
      });
    }
  };

  const handleLeave = () => {
    if (cardContainerRef.current) {
      gsap.to(cardContainerRef.current, {
        rotateY: 0,
        duration: 0.8,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <Box
      className={className}
      position="relative"
      cursor="pointer"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        perspective: "1000px",
        width: "fit-content",
      }}
    >
      <Box
        ref={cardContainerRef}
        position="relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        <Box
          bg="white"
          border="2px solid"
          borderColor="brand.text.black"
          px={{ base: 1, md: 1.5 }}
          pt={{ base: 1, md: 1.5 }}
          rounded={{ base: "xl", md: "2xl" }}
          style={{ backfaceVisibility: "hidden" }}
        >
          <VStack
            bg={bg}
            borderRadius={{ base: "lg", md: "xl" }}
            shadow="md"
            border="2px solid"
            borderColor="brand.text.black"
            minW={{ base: "80px", sm: "100px", md: "120px", lg: "175px" }}
            minH={{ base: "100px", sm: "120px", md: "140px", lg: "205px" }}
            position="relative"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Image
              src={charImage}
              alt={`${name} char`}
              boxSize={{ base: "123px", sm: "140px", md: "172px", lg: "250px" }}
              objectFit="cover"
              objectPosition="center"
              position="absolute"
              top={{ base: "-8px", md: "-10px" }}
              left="50%"
              transform="translateX(-50%)"
              zIndex={2}
              pointerEvents="none"
              overflow="visible"
            />
          </VStack>
          <Text
            fontFamily="bestime"
            fontWeight="light"
            textAlign="center"
            fontSize={{ base: "sm", sm: "md", md: "lg" }}
            color="brand.text.black"
            mt={1}
          >
            {name}
          </Text>
        </Box>

        <Box
          position="absolute"
          top={0}
          left={0}
          bg="white"
          border="2px solid"
          borderColor="brand.text.black"
          px={{ base: 1, md: 1.5 }}
          pt={{ base: 1, md: 1.5 }}
          rounded={{ base: "xl", md: "2xl" }}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <VStack
            bg={bg}
            borderRadius={{ base: "lg", md: "xl" }}
            shadow="md"
            border="2px solid"
            borderColor="brand.text.black"
            minW={{ base: "80px", sm: "100px", md: "120px", lg: "175px" }}
            minH={{ base: "100px", sm: "120px", md: "140px", lg: "205px" }}
            position="relative"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              position="absolute"
              inset="0"
              rounded={{ base: "md", md: "lg" }}
              zIndex={1}
              backgroundImage={realImage ? `url(${realImage})` : "none"}
              backgroundSize="cover"
              backgroundPosition="center"
              pointerEvents="none"
            />
          </VStack>
          <Text
            fontFamily="bestime"
            fontWeight="light"
            textAlign="center"
            fontSize={{ base: "sm", sm: "md", md: "lg" }}
            color="brand.text.black"
            mt={1}
            position="relative"
            zIndex={2}
          >
            {name}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
