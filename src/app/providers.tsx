"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@/theme";
import {
  ColorModeProvider,
  ColorModeProviderProps,
} from "@/components/ui/color-mode";

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} forcedTheme="light" />
    </ChakraProvider>
  );
}
