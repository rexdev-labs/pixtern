"use client";

import { VStack, Flex } from "@chakra-ui/react";
import { useMemo } from "react";
import PersonCard from "@/components/cards/PersonCard";
import SubHeader from "@/components/header/SubHeader";
import Bird from "@/components/Bird";

import type { Team } from "@/types/api/person/team";

export default function CoreTeamSection({
  teams,
}: Readonly<{ teams: Team[] }>) {
  const teamChunks = useMemo(
    () =>
      teams.reduce<Team[][]>(
        (acc, _, i, array) => (i % 3 ? acc : [...acc, array.slice(i, i + 3)]),
        []
      ),
    [teams]
  );

  return (
    <VStack py={{ base: 12, md: 16 }} px={4} gap={12} position="relative">
      <SubHeader text="Our Core Team" enableUnderline={true} />

      <Bird
        facing="right"
        variant="Purple"
        w={{ base: "16", md: "20", lg: "24" }}
        object-fit="contain"
        position="absolute"
        top="50%"
        left="10%"
        display={{ base: "none", md: "block" }}
      />
      <VStack gap={{ base: 4, md: 6, lg: 8 }}>
        {teamChunks.map((chunk, index) => (
          <Flex
            key={index}
            gap={{ base: 4, md: 6, lg: 8 }}
            justifyContent="center"
          >
            {chunk.map((team) => (
              <PersonCard
                key={team.id}
                href={`/teams/${team.slug}`}
                name={team.name}
                backgroundColor={team.detail!.backgroundColor}
                avatarImage={team.detail!.avatarImage}
                personImage={team.detail!.personImage}
                backgroundImage={team.detail!.backgroundImage}
              />
            ))}
          </Flex>
        ))}
      </VStack>
    </VStack>
  );
}
