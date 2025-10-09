import { Box, Heading, Link, Stack } from "@chakra-ui/react";

import type { FooterGroup } from "@/types/api/footer";

export function FooterNavigationGroup({
  group,
}: Readonly<{ group: FooterGroup }>) {
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
        mb={{ base: "4", md: "12"}}
        fontWeight="medium"
        textAlign="left"
      >
        {group.title}
      </Heading>

      <Stack gap="5" align="flex-end">
        {group.links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
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
            {link.title}
          </Link>
        ))}
      </Stack>
    </Box>
  );
}
