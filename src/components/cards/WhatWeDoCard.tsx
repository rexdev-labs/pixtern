import { Box, Card } from "@chakra-ui/react";
import { Image } from "@/components/Image";
import type { Job } from "@/types/api/homepage/whatWeDoSection";

export function WhatWeDoCard({ job }: Readonly<{ job: Job }>) {
  return (
    <Card.Root
      className="card-item"
      rounded={{ base: "lg", md: "xl" }}
      borderWidth={{ base: 2, md: 3 }}
      borderColor="brand.bg.black"
      width={{
        base: "100%",
        md: "calc(33.333% - 1rem)",
        lg: "360px",
      }}
      minH={{
        base: "auto",
        md: "340px",
        lg: "420px",
        xl: "460px",
      }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      bg="white"
      style={{
        filter: "drop-shadow(0 0 18px rgba(15, 91, 118, 0.2))",
      }}
    >
      <Card.Body
        alignItems="center"
        textAlign="center"
        flex="1"
        p={{ base: 4, md: 5, lg: 6 }}
      >
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap={{ base: 3, md: 4, lg: 5 }}
          mt={1}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${job.illustration.url}`}
            alt={job.title}
            w={{
              base: "75%",
              md: "80%",
              lg: "85%",
            }}
            maxW="300px"
            mx="auto"
            display="block"
            objectFit="contain"
          />
          <Card.Title
            fontFamily="Inter"
            fontWeight="extrabold"
            fontSize={{
              base: "lg",
              sm: "xl",
              md: "lg",
              lg: "2xl",
              xl: "3xl",
            }}
            lineHeight="shorter"
            textAlign="center"
            mt={1}
          >
            {job.title}
          </Card.Title>

          <Card.Description
            fontFamily="Inter"
            fontWeight="normal"
            fontSize={{
              base: "2xs",
              sm: "xs",
              md: "2xs",
              lg: "xs",
              xl: "xs",
            }}
            lineHeight="short"
            textAlign="center"
            px={{
              base: 6,
              sm: 4,
              md: 6,
              lg: 8,
            }}
            mt={1}
            color="gray.600"
            lineClamp={5}
          >
            {job.description}
          </Card.Description>
        </Box>
      </Card.Body>
    </Card.Root>
  );
}
