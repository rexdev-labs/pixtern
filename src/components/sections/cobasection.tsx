import { Box, Container, Flex, Text, Image } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function CobaSections() {
  const aboutRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(".title", { opacity: 0, y: 50 });
      gsap.set(".ampersand", { opacity: 0, x: 100 });
      gsap.set(".box-title", { opacity: 0, y: 100, rotation: 0 });
      gsap.set(".bird", { oopacity: 0, scale: 0 });
      gsap.set(".main-title", { opacity: 0, y: 30 });
      gsap.set(".main-description", { opacity: 0, y: 20 });
      gsap.set(".character", { opacity: 0, y: 80 });
      gsap.set(".flowting-box", { opacity: 0, scale: 0 });

      //Title
      ScrollTrigger.create({
        trigger: ".title",
        start: "top 75%",
        end: "bottom top",
        // markers: true,
        toggleActions: "play reverse play reverse",
        animation: gsap.to(".title", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.inOut(1.7)",
        }),
      });

      //ampersend
      ScrollTrigger.create({
        trigger: ".ampersand",
        start: "top 75%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
        animation: gsap.to(".ampersand", {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "bounce.out",
        }),
      });

      // box title
      ScrollTrigger.create({
        trigger: ".box-title",
        start: "top 85%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
        animation: gsap.to(".box-title", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "bounce.out",
        }),
      });

      //bird
      ScrollTrigger.create({
        trigger: ".bird",
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
        animation: gsap.to(".bird", {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
        }),
      });

      //main title
      ScrollTrigger.create({
        trigger: ".main-title",
        start: "top 85%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
        animation: gsap.to(".main-title", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        }),
      });

      //description
      ScrollTrigger.create({
        trigger: ".main-description",
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play reverse play reverse",
        animation: gsap.to(".main-description", {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        }),
      });

      ScrollTrigger.create({
        trigger: ".character",
        start: "top 80%",
        end: "bottom 15%",
        toggleActions: "play reverse play reverse",
        animation: gsap.to(".character", {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "back.out(1.7)",
        }),
      });

      // floating boxes
      ScrollTrigger.create({
        trigger: ".floating-box",
        start: "top 80%",
        end: "bottom 15%",
        toggleActions: "play reverse play reverse",
        animation: gsap.to(".floating-box", {
          opacity: 0.7,
          scale: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: "back.out(1.7)",
        }),
      });
    },
    { scope: aboutRef }
  );

  return (
    <Box
      id="about"
      py={{ base: 12, md: 20 }}
      mt={{ base: 200, xl: 0 }}
      position="relative"
      overflow="hidden"
    >
      <Container ref={aboutRef} maxW="7xl">
        <Flex justify="center">
          <Text
            className="title"
            mt={{ base: 6, md: 12, lg: 20 }}
            fontFamily="Bestime"
            fontSize={{
              base: "28px",
              sm: "36px",
              md: "48px",
              lg: "64px",
            }}
            fontWeight="400"
            lineHeight={{ base: "40px", md: "55px", lg: "75px" }}
            textAlign="center"
          >
            The No.1 in Creating
          </Text>
        </Flex>

        <Flex justify="center" alignItems="center" mt={6} position="relative">
          <Box
            className="bird"
            position="absolute"
            right={{ base: "4%", md: "8%", lg: "15%" }}
            bottom={{
              base: "40%",
              md: "56%",
              lg: "50%",
            }}
            zIndex={20}
          >
            <Image
              src="/images/char/BirdGreen.png"
              alt="Bird"
              w={{
                base: "46px",
                sm: "60px",
                md: "80px",
                lg: "100px",
              }}
              h="auto"
            />
          </Box>
          <Box
            className="bird"
            position="absolute"
            left={{
              base: "2%",
              md: "8%",
              xl: "13.5%",
            }}
            bottom="83%"
            zIndex={20}
          >
            <Image
              src="/images/char/BirdPurple.png"
              alt="Bird"
              w={{
                base: "46px",
                sm: "60px",
                md: "80px",
                lg: "100px",
              }}
              h="auto"
            />
          </Box>

          <Text
            className="ampersand"
            fontSize={{
              base: "24px",
              sm: "32px",
              md: "38px",
              lg: "43px",
            }}
            fontWeight="400"
            fontFamily="Bestime"
            position="absolute"
            top={{ base: "-20px", md: "-30px", lg: "-24px" }}
            left={{
              base: "53%",
              md: "52%",
              lg: "51.5%",
            }}
            transform="rotate(10deg)"
          >
            &
          </Text>

          <Box
            className="box-title"
            mr={{ base: -4, md: -6, lg: -10 }}
            mb={{ base: 6, lg: 10 }}
            bg="brand.bg.blue.primary"
            fontSize={{
              base: "18px",
              sm: "36px",
              md: "44px",
              lg: "53px",
            }}
            fontWeight="400"
            color="brand.text.white"
            px={{ base: 6, md: 10, lg: 12 }}
            rounded="lg"
            transform="rotate(-2deg)"
            borderColor="brand.bg.black"
            borderWidth={2.5}
            filter={{
              base: "drop-shadow(-5px 8px 0px rgba(176, 176, 176, 0.6))",
              md: "drop-shadow(-10px 12px 0px rgba(176, 176, 176, 0.6))",
              lg: "drop-shadow(-14px 16px 0px rgba(176, 176, 176, 0.6))",
            }}
          >
            <Text fontFamily="Neulis Cursive" textAlign="center">
              Web Design
            </Text>
          </Box>

          <Box
            className="box-title"
            mt={{ base: 6, xl: 10 }}
            bg="brand.bg.yellow.primary"
            fontSize={{
              base: "18px",
              sm: "36px",
              md: "44px",
              lg: "53px",
            }}
            fontWeight="400"
            color="brand.text.black"
            px={{ base: 6, md: 10, lg: 12 }}
            rounded="lg"
            transform="rotate(2deg)"
            borderColor="brand.bg.black"
            borderWidth={2.5}
            filter={{
              base: "drop-shadow(5px 8px 0px rgba(176, 176, 176, 0.6))",
              md: "drop-shadow(10px 12px 0px rgba(176, 176, 176, 0.6))",
              lg: "drop-shadow(14px 16px 0px rgba(176, 176, 176, 0.6))",
            }}
          >
            <Text fontFamily="Neulis Cursive" textAlign="center">
              Lorem Ipsum
            </Text>
          </Box>
        </Flex>

        <Flex
          justify="center"
          align="flex-start"
          position="relative"
          h={{ base: "80px", md: "120px" }}
        >
          <Box className="bird" position="absolute" right="34%" bottom="10%">
            <Image
              src="/images/char/BirdPurple2.png"
              alt="Bird"
              w={{
                base: "40px",
                sm: "55px",
                md: "70px",
                lg: "75px",
              }}
              h="auto"
            />
          </Box>
        </Flex>

        <Flex
          justify="center"
          align="flex-start"
          mt="10px"
          mb={{ base: "300px", md: "400px", lg: "300px" }}
          p="10"
          position="relative"
        >
          <Box display={{ base: "none", md: "flex", lg: "flex" }}>
            <Box
              className="floating-box"
              position="absolute"
              right="4%"
              bottom="70%"
              w={{ base: "80px", md: "120px", lg: "150px" }}
              h={{ base: "60px", md: "90px", lg: "120px" }}
              bg="gray.300"
              rounded="md"
              border="2px solid"
              borderColor="gray.400"
              transform="rotate(10deg)"
            />
            <Box
              className="floating-box"
              position="absolute"
              right="0"
              bottom="25%"
              w={{ base: "60px", md: "80px", lg: "95px" }}
              h={{ base: "45px", md: "60px", lg: "77px" }}
              bg="gray.300"
              rounded="md"
              border="2px solid"
              borderColor="gray.400"
              transform="rotate(10deg)"
            />
          </Box>

          <Box display={{ base: "none", md: "flex", lg: "flex" }}>
            <Box
              className="floating-box"
              position="absolute"
              left={{ base: "0", md: "3%" }}
              bottom="25%"
              w={{ base: "65px", md: "85px", lg: "97px" }}
              h={{ base: "50px", md: "70px", lg: "79px" }}
              bg="gray.300"
              rounded="md"
              border="2px solid"
              borderColor="gray.400"
              transform="rotate(-10deg)"
            />
            <Box
              className="floating-box"
              position="absolute"
              left="14%"
              top="2%"
              w={{ base: "80px", md: "80px", lg: "120px" }}
              h={{ base: "60px", md: "60px", lg: "96px" }}
              bg="gray.300"
              rounded="md"
              border="2px solid"
              borderColor="gray.400"
              transform="rotate(10deg)"
            />
            <Box
              className="floating-box"
              position="absolute"
              left={{ base: "0", "2xl": "-2%" }}
              top="-20%"
              w={{ base: "90px", md: "90px", lg: "135px" }}
              h={{ base: "70px", md: "70px", lg: "109px" }}
              bg="gray.300"
              rounded="md"
              border="2px solid"
              borderColor="gray.400"
              transform="rotate(-10deg)"
            />
          </Box>

          <Box maxW="800px" textAlign="center" zIndex={1}>
            <Text
              className="main-title"
              fontFamily="Bestime"
              fontSize={{
                base: "24px",
                sm: "32px",
                md: "40px",
                lg: "48px",
              }}
              fontWeight="400"
              mb={4}
              textAlign="center"
            >
              <Text as="span" color="brand.bg.blue.primary">
                What is{" "}
              </Text>
              <Text as="span" color="brand.text.black" fontWeight="bold">
                PIXEL SPACE
              </Text>
              <Text
                as="span"
                display="block"
                color="brand.text.black"
                fontWeight="bold"
              >
                CREATIVE DIGITAL?
              </Text>
            </Text>

            <Text
              className="main-description"
              px={{
                base: "20px",
                sm: "40px",
                md: "80px",
                lg: "130px",
              }}
              fontFamily="Inter"
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight="400"
              color="brand.text.black"
              lineHeight="1.6"
              textAlign="center"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </Box>

          <Box
            className="character"
            position="absolute"
            left={{
              base: "-10px",
              md: "20px",
              lg: "10px",
            }}
            top={{
              base: "340px",
              md: "320px",
              lg: "130px",
            }}
            transform="translateY(20%)"
          >
            <Image
              src="/images/char/jelita1.png"
              alt="Jelita character"
              w={{
                base: "250px",
                md: "510px",
                lg: "550px",
              }}
              h="auto"
            />
          </Box>

          <Box
            className="character"
            position="absolute"
            right={{
              base: "-10px",
              md: "20px",
              lg: "20px",
            }}
            top={{
              base: "340px",
              md: "320px",
              lg: "130px",
            }}
            transform="translateY(20%)"
          >
            <Image
              src="/images/char/rexsi1.png"
              alt="Rexsi character"
              w={{
                base: "200px",
                md: "410px",
                lg: "450px",
              }}
              h="auto"
              transform="rotate(2deg)"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
