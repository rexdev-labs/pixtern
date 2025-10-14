import { Box, Center, Container, Text } from "@chakra-ui/react";

export default function QoutesCard() {
    return (
        <Container zIndex={30} maxW={{ md: "xl"}} px="8" position="relative">
            <Center>
                <Box
                    bg="white"
                    rounded="xl"
                    border="2px solid"
                    borderColor="brand.bg.black"
                    px="16"
                    py="7"
                    minH={{ base:"0" , md: "100px"}}
                    minW={{ base:"0" , md: "500px"}}
                    fontWeight="semibold"
                    filter={{
                        base: "drop-shadow(-5px 8px 0px rgba(54, 54, 54, 0.4))",
                        md: "drop-shadow(-10px 12px 0px rgba(54, 54, 54, 0.4))",
                        lg: "drop-shadow(-8px 8px 0px rgba(54, 54, 54, 0.4))",
                    }}
                >
                    <Text
                        fontFamily="inter"
                    >
                        "Kode tidak berbohong, komentar terkadang iya." 
                    </Text>
                </Box>
                <Box position="absolute" top="-12%" right="0">
                    <Box
                        position="absolute"
                        top="-55%"
                        left="35%"
                        transform="rotate(-4deg)"
                        zIndex={2}
                        bg="brand.bg.blue.primary"
                        color="brand.text.white"
                        fontWeight="bold"
                        fontSize="lg"
                        border="2px solid"
                        borderColor="brand.bg.black"
                        px="6"
                        rounded="full"
                        textAlign="center"
                    >
                        <Text fontFamily="cursive">2025</Text>
                    </Box>

                    <Box
                        bg="brand.bg.pink"
                        color="brand.text.white"
                        fontWeight="bold"
                        fontSize="lg"
                        border="2px solid"
                        borderColor="brand.bg.black"
                        transform="rotate(10deg)"
                        py="1"
                        px="6"
                        rounded="full"
                        textAlign="center"
                        zIndex="1"
                    >
                        <Text fontFamily="cursive">QUOTES</Text>
                    </Box>
                </Box>
            </Center>
        </Container>
    )
}