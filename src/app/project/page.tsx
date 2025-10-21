import BackgroundCloud from "@/components/background/BackgroundCloud";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/Navbar/NavBar";
import ScrollSmootherWrapper from "@/components/ScrollSmootherWrapper";
import { Box } from "@chakra-ui/react";

export default function ProjectPage() {
  return (
    <>
      <Navbar />
      <ScrollSmootherWrapper>
        <BackgroundCloud>
          <Header
            text="What We Have Done"
            variant="double"
            color="brand.text.black"
          />

          <Footer />
        </BackgroundCloud>
      </ScrollSmootherWrapper>
    </>
  );
}
