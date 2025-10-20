"use client";

import { Image, Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface BackgroundCloudProps {
  children: ReactNode;
}

export default function BackgroundCloud({ children }: BackgroundCloudProps) {
  return (
    <Box
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPositionY="0"
      backgroundImage="url(/images/cloud/cloudss.svg)"
    >
      {children}
    </Box>
  );
}
