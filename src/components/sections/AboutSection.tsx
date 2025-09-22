import { Box, Container, Flex, Text, Image } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function AboutSection() {
  const aboutRef = useRef(null);

  useGSAP(() => {
    gsap.set(".title", { opacity: 0, y: 50 })
    gsap.set(".ampersand", { opacity: 0, x: 100 })
    gsap.set(".box-title", { opacity: 0, y: 100, rotation: 0 })
    gsap.set(".bird", { oopacity: 0, scale: 0 })
    gsap.set(".main-title", { opacity: 0, y: 30 })
    gsap.set(".main-description", { opacity: 0, y: 20 })
    gsap.set(".character", { opacity: 0, y: 80 })
    gsap.set(".shadow", { opacity: 0, scale: 0.5 })
    gsap.set(".flowting-box", { opacity: 0, scale: 0 })

    //Title
    ScrollTrigger.create({
      trigger: ".title",
      start: "top 85%",
      end: "bottom top",
      // markers: true,
      toggleActions: "play reverse play reverse",
      animation: gsap.to(".title", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.inOut(1.7)"
      })
    });
    
    //ampersend
    ScrollTrigger.create({
      trigger: ".ampersand",
      start: "top 85%",
      end: "bottom top",
      toggleActions: "play reverse play reverse",
      animation: gsap.to(".ampersand", {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "bounce.out"
      })
    })

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
        ease: "bounce.out"
      })
    })

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
        ease: "back.out(1.7)"
      })
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
        ease: "power2.out"
      })
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
        ease: "power2.out"
      })
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
        ease: "back.out(1.7)"
      })
    });

    //shadow
    ScrollTrigger.create({
      trigger: ".shadow",
      start: "top 85%",
      end: "bottom 15%",
      toggleActions: "play reverse play reverse",
      animation: gsap.to(".shadow", {
        opacity: 0.8,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      })
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
        ease: "back.out(1.7)"
      })
    });


  }, {scope: aboutRef})

  

  return (
    <Box id="about" ref={aboutRef} py={20} position="relative" overflow="hidden">
      <Container maxW="7xl">
        <Flex justify="center">
          <Text
            className="title"
            marginTop="20"
            fontFamily="Bestime"
            fontSize="64.3px"
            fontWeight="400"
            lineHeight="75.32px"
            textAlign="center"
          >
            The No.1 in Creating
          </Text>
        </Flex>

        <Flex justify="center" alignItems="center" mt={6} position="relative">
          <Box className="bird" position="absolute" right="17.5%" bottom="50%" zIndex={20}>
            <Image
              src="/images/char/BirdGreen.png"
              alt="Bird"
              w="100px"
              h="auto"
            />
          </Box>
          <Box className="bird" position="absolute" left="13.5%" bottom="83%" zIndex={20}>
            <Image
              src="/images/char/BirdPurple.png"
              alt="Bird"
              w="100px"
              h="auto"
            />
          </Box>
          <Text
            className="ampersand"
            fontSize="43.46px"
            fontWeight="400"
            fontFamily="Bestime"
            position="absolute"
            top="-33px"
            left="51%"
            transform="rotate(10deg)"
          >
            &
          </Text>

          <Box
            className="box-title"
            mr={-10}
            mb={10}
            bg="brand.bg.blue.primary"
            fontSize="53.91px"
            fontWeight="400"
            color="brand.text.white"
            px={12}
            rounded="lg"
            transform="rotate(-2deg)"
            borderColor="brand.bg.black"
            borderWidth={2.5}
            filter="drop-shadow(-14px 16px 0px rgba(176, 176, 176, 0.6))"
          >
            <Text fontFamily="Neulis Cursive" textAlign="center">
              Web Design
            </Text>
          </Box>

          <Box
            className="box-title"
            mt={10}
            bg="brand.bg.yellow.primary"
            fontSize="53.91px"
            fontWeight="400"
            color="brand.text.black"
            px={12}
            rounded="lg"
            transform="rotate(2deg)"
            borderColor="brand.bg.black"
            borderWidth={2.5}
            filter="drop-shadow(14px 16px 0px rgba(176, 176, 176, 0.6))"
          >
            <Text fontFamily="Neulis Cursive" textAlign="center">
              Lorem Ipsum
            </Text>
          </Box>
        </Flex>

        <Flex justify="center" align="flex-start" position="relative" h="120px">
          <Box className="bird" position="absolute" right="34%" bottom="10%">
            <Image
              src="/images/char/BirdPurple2.png"
              alt="Jelita character"
              w="75.19px"
              h="auto"
            />
          </Box>
        </Flex>

        <Flex
          justify="center"
          align="flex-start"
          mt="10px"
          mb="300px"
          p="10"
          position="relative"
        >
          {/* Right Box */}
          <Box>
            <Box
              className="flowting-box"
              position="absolute"
              right="4%"
              bottom="70%"
              w="149.67px"
              h="121.08px"
              bg="gray.300"
              rounded="md"
              border="2px solid"
              borderColor="gray.400"
              transform="rotate(10deg)"
            />
            <Box
              className="flowting-box"
              position="absolute"
              right="0"
              bottom="25%"
              w="95.65px"
              h="77.37px"
              bg="gray.300"
              rounded="md"
              border="2px solid"
              borderColor="gray.400"
              transform="rotate(10deg)"
            />
          </Box>
          {/* Left Box */}
          <Box>
            <Box
              className="flowting-box"
              position="absolute"
              left={{
                base: "0",
                md: "3%"
              }}
              bottom="25%"
              w="97.88px"
              h="79.18px"
              bg="gray.300"
              rounded="md"
              border="2px solid"
              borderColor="gray.400"
              transform="rotate(-10deg)"
            />
            <Box
              className="flowting-box"
              position="absolute"
              left="14%"
              top="2%"
              w="119.68px"
              h="96.82px"
              bg="gray.300"
              rounded="md"
              border="2px solid"
              borderColor="gray.400"
              transform="rotate(10deg)"
            />
            <Box
              className="flowting-box"
              position="absolute"
              left={{
                base: "0",
                "2xl": "-2%"
              }}
              top="-20%"
              w="135.4px"
              h="109.544px"
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
              fontSize={{ base: "32px", md: "48px" }}
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
              px="130px"
              fontFamily="Inter"
              fontSize="16px"
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

          <Image
            className="shadow"
            src="/images/char/ShadowRexsi.png"
            alt="Shadow Rexsi"
            w="369px"
            h="auto"
            position="absolute"
            right="2%"
            bottom="-65%"
            zIndex={0}
          />
          <Image
            className="shadow"
            src="/images/char/ShadowJelita.png"
            alt="Shadow Rexsi"
            w="369px"
            h="auto"
            position="absolute"
            left="4%"
            bottom="-60%"
            zIndex={0}
          />

          <Box
            className="character"
            position="absolute"
            left="20"
            bottom="0"
            top="32"
            transform="translateY(20%)"
          >
            <Image
              src="/images/char/jelita.png"
              alt="Jelita character"
              w="298px"
              h="394.03px"
            />
          </Box>

          <Box
            className="character"
            position="absolute"
            right="20"
            bottom="0"
            top="32"
            transform="translateY(20%)"
          >
            <Image
              src="/images/char/rexsi.png"
              alt="Rexsi character"
              w="229px"
              h="406.6px"
              transform="rotate(2deg)"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
