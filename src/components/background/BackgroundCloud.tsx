"use client";

import { Image, Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface BackgroundCloudProps {
  children: ReactNode;
}

export default function BackgroundCloud({ children }: BackgroundCloudProps) {
  return (
    <Box position="relative" w="100%">
      <Image
        src="/images/cloud/cloudss.svg"
        alt="Cloud Left"
        position="absolute"
        top={{ base: "40%", md: "15%", lg: "14%" }}
        left="0"
        w="100%"
        h="auto"
        objectFit="cover"
        zIndex={0}
        pointerEvents="none"
      />
      <Box position="relative" zIndex={1}>
        {children}
      </Box>
    </Box>
  );
}