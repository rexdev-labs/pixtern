"use client";

import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { useRef } from "react";
import gsap from "gsap";

interface ProfileCardProps {
  name: string;
  charImage: string;
  realImage?: string;
  bg: string;
  bgImage?: string;
  className?: string;
}

export default function ProfileCard({
  name,
  charImage,
  realImage,
  bg,
  bgImage,
  className,
}: Readonly<ProfileCardProps>) {
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
          px={{ base: 1.5, md: 2 }}
          pt={{ base: 1.5, md: 2 }}
          rounded={{ base: "2xl", md: "3xl", lg: "3xl" }}
          style={{ backfaceVisibility: "hidden" }}
        >
          <VStack
            bg={bg}
            rounded={{ base: "xl", md: "2xl", lg: "2xl" }}
            shadow="md"
            border="2px solid"
            borderColor="brand.text.black"
            minW={{ base: "90px", sm: "105px", md: "120px", lg: "175px" }}
            minH={{ base: "105px", sm: "120px", md: "140px", lg: "205px" }}
            position="relative"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Image
              src={charImage}
              alt={`${name} char`}
              boxSize={{ base: "126px", sm: "145px", md: "173px", lg: "250px" }}
              objectFit="cover"
              objectPosition="center"
              position="absolute"
              top={{ base: "-1.5", md: "-2.5" }}
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
            fontSize={{ base: "sm", sm: "md", md: "lg", lg: "2xl" }}
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
          px={{ base: 1.5, md: 2 }}
          pt={{ base: 1.5, md: 2 }}
          rounded={{ base: "2xl", md: "3xl", lg: "3xl" }}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <VStack
            backgroundImage={`url(${bgImage})`}
            backgroundSize={{ base: "107%", lg: "102%" }}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            borderRadius="30px"
            rounded={{ base: "xl", md: "2xl", lg: "2xl" }}
            border="2px solid"
            borderColor="brand.text.black"
            minW={{ base: "90px", sm: "105px", md: "120px", lg: "175px" }}
            minH={{ base: "105px", sm: "120px", md: "140px", lg: "205px" }}
            position="relative"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={realImage}
              alt={`${name} char`}
              boxSize={{ base: "107px", sm: "122px", md: "143px", lg: "211px" }}
              objectFit="cover"
              objectPosition="center"
              position="absolute"
              top={{ base: "-1.5", md: "-2", lg: "-2.5" }}
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
            fontSize={{ base: "sm", sm: "md", md: "lg", lg: "2xl" }}
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
