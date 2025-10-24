import BackgroundCloud from "@/components/background/BackgroundCloud";
import ScrollSmootherWrapper from "@/components/ScrollSmootherWrapper";
import JobCard from "@/components/cards/do/JobCard";
import DocumentationCards from "@/components/cards/do/DocumentationCards";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/NavBar";
import { Box, Container, Stack } from "@chakra-ui/react";
import { fetchData } from "@/utils/fetchData";

import type { WhatWeDoResponse } from "@/types/api/response/whatWeDoResponse";

async function getWhatWeDoData() {
  return await fetchData<WhatWeDoResponse>(
    `${process.env.NEXT_PUBLIC_API_URL}/what-we-do`,
    {
      next: { revalidate: 60 },
    }
  );
}

export default async function WhatWeDoPage() {
  const { data: whatWeDoData } = await getWhatWeDoData();

  return (
    <>
      <Navbar />
      <ScrollSmootherWrapper>
        <BackgroundCloud>
          <Box
            position="relative"
            pt={{ base: "28", md: "36" }}
            overflow="hidden"
            zIndex={1}
          >
            <Container maxW="9xl" px="8" position="relative" zIndex={1}>
              <Header
                text="What We Do"
                variant="single"
                color="brand.text.orange"
              />

              <Stack mt="28" gap={{ base: 6, md: 8 }}>
                {whatWeDoData.jobs &&
                  whatWeDoData.jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
              </Stack>

              <Box mx="auto" py={{ base: 10, md: 20 }} px={{ base: 4, md: 0 }}>
                <DocumentationCards
                  images={whatWeDoData.documentation || []}
                />
              </Box>
            </Container>
          </Box>
        </BackgroundCloud>
        <Footer />
      </ScrollSmootherWrapper>
    </>
  );
}
