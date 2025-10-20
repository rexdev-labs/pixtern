import BackgroundCloud from "@/components/background/BackgroundCloud";
import ScrollSmootherWrapper from "@/components/ScrollSmootherWrapper";
import { Box, Container, Stack } from "@chakra-ui/react";
import HeaderDo from "@/components/header/HeaderDo";
import DoCard from "@/components/cards/do/DoCard";
import CardDocument from "@/components/cards/do/CardDocument";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/NavBar";

export default function DoPage() {
    const data = {
        doData: [
            {
                id: 1,
                title: "Front-end Development",
                description: "Pixel Space Digital Creative. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                image: "images/char/programing.png"
            },
            {
                id: 2,
                title: "Back-end Development",
                description: "Pixel Space Digital Creative. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                image: "images/char/programing.png"
            },
            {
                id: 3,
                title: "UI/UX Designer",
                description: "Pixel Space Digital Creative. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                image: "images/char/uiUx.png"
            },
        ],
    };

    const documentImages = [
        "/images/char/bgArya.png",
        "/images/char/bgArya.png",
        "/images/char/bgArya.png",
        "/images/char/bgArya.png",
        "/images/char/bgArya.png",
        "/images/char/bgArya.png",
        "/images/char/bgArya.png",
    ];

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
                        <Container
                            maxW="9xl"
                            px="8"
                            position="relative"
                            zIndex={1}
                        >
                            <HeaderDo />
                            <Stack mt="28" gap={{ base: 6, md: 8 }}>
                                {data.doData?.map((doItem, index) => {
                                    if (index >= 3) return null;

                                    return <DoCard key={doItem.id} doItem={doItem} index={index} />;
                                })}
                            </Stack>

                            <Box mx="auto" py={{ base: 10, md: 20 }} px={{ base: 4, md: 0 }}>
                                <CardDocument images={documentImages} />
                            </Box>
                        </Container>
                    </Box>
                </BackgroundCloud>
                <Footer />
            </ScrollSmootherWrapper>
        </>
    );
}