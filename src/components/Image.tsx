import { Image as ChakraImage, type ImageProps } from "@chakra-ui/react";
import type { RefAttributes } from "react";

export function Image(props: RefAttributes<HTMLImageElement> & ImageProps ) {
  return <ChakraImage {...props} loading="lazy" />;
}
