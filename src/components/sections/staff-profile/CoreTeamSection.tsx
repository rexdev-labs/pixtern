"use client";

import { VStack, Flex } from "@chakra-ui/react";
import { useMemo } from "react";
import PersonCard from "@/components/cards/PersonCard";
import SubHeader from "@/components/header/SubHeader";
import Bird from "@/components/Bird";

import type { Team } from "@/types/api/team";
import type { TeamData } from "@/types/api/response/staffPageResponse";

function TeamCards({ teams }: Readonly<{ teams: Team[] }>) {
  const teamChunks = useMemo(
    () =>
      teams.reduce<Team[][]>(
        (acc, _, i, array) => (i % 3 ? acc : [...acc, array.slice(i, i + 3)]),
        []
      ),
    [teams]
  );

  return teamChunks.map((chunk, index) => (
    <Flex key={index} gap={{ base: 4, md: 6, lg: 8 }} justifyContent="center">
      {chunk.map((team) => (
        <PersonCard
          key={team.id}
          name={team.name}
          backgroundColor={team.backgroundColor}
          avatarImage={team.avatarImage}
          profileImage={team.profileImage}
          profileBackground={team.profileBackground}
        />
      ))}
    </Flex>
  ));
}

export default function CoreTeamSection({
  teamData,
}: Readonly<{ teamData: TeamData }>) {
  return (
    <VStack py={{ base: 12, md: 16 }} px={4} gap={12} position="relative">
      <SubHeader text={teamData.title} enableUnderline={true} />

      <Bird
        facing="right"
        variant="Purple"
        w={{ base: "16", md: "20", lg: "24" }}
        object-fit="contain"
        position="absolute"
        top="50%"
        left="10%"
      />
      {teamData.teams && (
        <VStack gap={{ base: 4, md: 6, lg: 8 }}>
          <TeamCards teams={teamData.teams} />
        </VStack>
      )}
    </VStack>
  );
}
