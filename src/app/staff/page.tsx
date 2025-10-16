import { Box, Container, VStack } from "@chakra-ui/react";
import CoreTeamSection from "@/components/sections/staff-profile/CoreTeamSection";
import InternsSection from "@/components/sections/staff-profile/InternsSection";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer/Footer";
import ScrollSmootherWrapper from "@/components/ScrollSmootherWrapper";
import qs from "qs";

import type { ApiResponse } from "@/types/api/response/apiResponse";
import type { StaffPageResponse } from "@/types/api/response/staffPageResponse";

async function getStaffData(): Promise<ApiResponse<StaffPageResponse>> {
  const query = qs.stringify({
    populate: {
      team: {
        populate: {
          teams: {
            populate: "detail",
          },
        },
      },
      interns: {
        populate: {
          interns: {
            populate: "detail",
          },
        },
      },
      quotes: {
        populate: "*",
      },
    },
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/staff-profile?${query}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function StaffPage() {
  const data = await getStaffData();

  return (
    <ScrollSmootherWrapper>
      <Container as="main">
        <Box
          bgGradient="linear(to-br, blue.50, purple.50)"
          py={{ base: 12, md: 20 }}
          px={4}
        >
          <Header
            text="Meet Our Creative Team"
            variant="double"
            color="brand.text.blue"
          />
        </Box>

        {/* Core Team Section */}
        <CoreTeamSection teams={data.data.teams} />

        {/* Internship Team Section */}
        <VStack gap={12} alignItems="stretch">
          {data.data.interns.map((internData) => (
            <InternsSection key={internData.id} internData={internData} />
          ))}
        </VStack>
      </Container>

      <Footer />
    </ScrollSmootherWrapper>
  );
}
