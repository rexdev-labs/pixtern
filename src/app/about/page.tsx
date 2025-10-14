import BackgroundCloud from "@/components/background/BackgroundCloud";
import Footer from "@/components/Footer/Footer";
import ScrollSmootherWrapper from "@/components/ScrollSmootherWrapper";
import AboutPixel from "@/components/sections/AboutPixel";

export default function AboutPage() {
  return (
    <ScrollSmootherWrapper>
      <BackgroundCloud>
        <AboutPixel />
      </BackgroundCloud>
      <Footer />
    </ScrollSmootherWrapper>
  );
}