"use client";

import { VStack, Flex } from "@chakra-ui/react";
import { useMemo } from "react";
import SubHeader from "@/components/header/SubHeader";
import Bird from "@/components/Bird";
import PersonCard from "@/components/cards/PersonCard";

import type { InternsData } from "@/types/api/response/staffPageResponse";
import type { Intern } from "@/types/api/person/intern";

function InternCards({ interns }: { interns: Intern[] }) {
  const internChunks = useMemo(
    () =>
      interns.reduce<Intern[][]>(
        (acc, _, i, array) => (i % 3 ? acc : [...acc, array.slice(i, i + 3)]),
        []
      ),
    [interns]
  );

  return internChunks.map((chunk, index) => (
    <Flex key={index} gap={{ base: 4, md: 6, lg: 8 }} justifyContent="center">
      {chunk.map((intern) => (
        <PersonCard
          key={intern.id}
          name={intern.name}
          href={`/interns/${intern.slug}`}
          backgroundColor={intern.detail!.backgroundColor}
          avatarImage={intern.detail!.avatarImage}
          personImage={intern.detail!.personImage}
          backgroundImage={intern.detail!.backgroundImage}
        />
      ))}
    </Flex>
  ));
}

export default function InternsSection({
  internData,
}: Readonly<{
  internData: InternsData;
}>) {

  return (
    <VStack py={{ base: 12, md: 16 }} px={4} gap={12} position="relative">
      <SubHeader
        text={`${internData.year} Internship Team`}
        enableUnderline={true}
      />

      <VStack gap={{ base: 4, md: 6, lg: 8 }}>
        <InternCards interns={internData.interns} />
      </VStack>

      <Bird
        facing="right"
        w={{ base: "16", md: "20", lg: "24" }}
        object-fit="contain"
        position="absolute"
        top="50%"
        left="10%"
      />

      <Bird
        facing="right"
        variant="Purple"
        w={{ base: "16", md: "20", lg: "24" }}
        object-fit="contain"
        position="absolute"
        top="50%"
        right="10%"
      />
    </VStack>
  );
}
