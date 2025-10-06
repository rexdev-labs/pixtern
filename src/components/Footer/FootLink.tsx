"use client";
import { Box, Heading, Link, Stack } from "@chakra-ui/react";
import React from "react";

interface FootLinkProps {
  title: string;
  links: string[];
}

export default function FootLink({ title, links }: FootLinkProps) {
  return (
    <Box color="brand.text.white" overflow="hidden">
      <Heading
        fontSize={{
          base: "xs",
          sm: "xs",
          md: "xs",
          lg: "lg",
          xl: "xl",
          "2xl": "2xl",
        }}
        mb="12"
        fontWeight="medium"
        textAlign="left"
      >
        {title}
      </Heading>

      <Stack gap="5" align="flex-end">
        {links.map((item, i) => (
          <Link
            key={i}
            href="#"
            color="brand.text.white"
            _hover={{ textDecoration: "underline" }}
            fontWeight="light"
            fontSize={{
              base: "xs",
              sm: "xs",
              md: "2xs",
              xl: "md",
              "2xl": "lg",
            }}
            textAlign="right"
          >
            {item}
          </Link>
        ))}
      </Stack>
    </Box>
  );
}
