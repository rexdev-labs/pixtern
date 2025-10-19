import { Box, Container, VStack } from "@chakra-ui/react";
import { fetchData } from "@/utils/fetchData";
import CoreTeamSection from "@/components/sections/staff-profile/CoreTeamSection";
import InternsSection from "@/components/sections/staff-profile/InternsSection";
import Header from "@/components/header/Header";
import Navbar from "@/components/Navbar/NavBar";
import Footer from "@/components/Footer/Footer";
import ScrollSmootherWrapper from "@/components/ScrollSmootherWrapper";

import type { StaffPageResponse } from "@/types/api/response/staffPageResponse";

async function getStaffData() {
  return await fetchData<StaffPageResponse>(
    `${process.env.NEXT_PUBLIC_API_URL}/staff-profile`,
    {
      next: { revalidate: 60 },
    }
  );
}

export default async function StaffPage() {
  const data = await getStaffData();

  return (
    <ScrollSmootherWrapper>
      <Container as="main">
        <Navbar />

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
