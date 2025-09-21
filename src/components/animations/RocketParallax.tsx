"use client";
import { Box, Image } from "@chakra-ui/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function RocketParallax() {
    const parallaxRef = useRef(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: parallaxRef.current,
                    start: "top bottom",
                    end: "=+1000",
                    scrub: true,
                    // markers: true,
                },
            });

            tl.fromTo(".group1", { y: 3100 }, { y: -2000, ease: "none" }, 0);
            tl.fromTo(".cloud2", { y: 2000 }, { y: -500, ease: "none" }, 0);

            gsap.to(".rocket", {
                y: 15,
                duration: 3,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
            });
        },
        { scope: parallaxRef }
    );

    useGSAP(
        () => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".airballoon",
                    start: "center center",
                    end: "bottom 34%",
                    scrub: true,
                    pin: true,
                    // markers: true,
                },
            });
        },
        { scope: parallaxRef }
    );

    useGSAP(
        () => {
            gsap.fromTo(
                ".woooosh-text",
                { opacity: 0, y: 30, scale: 0.8 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: ".woooosh-text",
                        start: "top center",
                        toggleActions: "play none none reverse",
                        // markers: true,
                    },
                }
            );
        },
        { scope: parallaxRef }
    );

    return (
        <Box
            ref={parallaxRef}
            position="absolute"
            top="0"
            left={0}
            w="100%"
            h="300vh"
            bg="transparent"
            pointerEvents="none"
            zIndex={20}
            overflow="hidden"
        >
            <Box className="group1" position="absolute" top="0" w="100%">
                <Image
                    src="/images/cloud/cloud1.svg"
                    w="100%"
                    h="auto"
                    alt=""
                />
                <Box
                    className="rocket"
                    position="absolute"
                    top="4%"
                    left="49.5%"
                    transform="translateX(-50%)"
                >
                    <Image
                        src="/images/cloud/rocket3.svg"
                        alt="Rocket"
                        w={{
                            base: "120px",
                            md: "180px",
                            xl: "200px",
                            "2xl": "260px",
                        }}
                        filter="drop-shadow(0 4px 8px rgba(0,0,0,0.1))"
                    />
                </Box>
            </Box>

            {/* Airballoon */}
            <Box
                className="airballoon"
                position="absolute"
                top="40%"
                left="22.5%"
                transform="translateX(-50%)"
                zIndex={2}
            >
                <Image
                    src="/images/cloud/airballon.png"
                    alt="Air Balloon"
                    w={{
                        base: "80px",
                        sm: "100px",
                        md: "120px",
                        lg: "140px",
                        xl: "160px",
                        "2xl": "180px",
                    }}
                    filter="drop-shadow(0 4px 8px rgba(0,0,0,0.1))"
                />
            </Box>

            {/* Cloud */}
            <Box className="cloud2" position="relative" w="100%">
                <Image
                    src="/images/cloud/cloud2.svg"
                    w="100%"
                    h="auto"
                    alt=""
                />

                <Box
                    position="absolute"
                    top="34%"
                    left="15%"
                    transform="translateX(50%)"
                    zIndex={3}
                >
                    <Image
                        src="/images/cloud/cloudsmall.png"
                        alt="Small Cloud"
                        w={{
                            base: "60px",
                            sm: "80px",
                            md: "100px",
                            lg: "120px",
                            xl: "140px",
                            "2xl": "160px",
                        }}
                    />
                </Box>
                <Box
                    position="absolute"
                    top="64%"
                    right="15%"
                    transform="translateX(50%)"
                    zIndex={3}
                >
                    <Image
                        src="/images/cloud/cloudsmall.png"
                        alt="Small Cloud"
                        w={{
                            base: "60px",
                            sm: "80px",
                            md: "100px",
                            lg: "120px",
                            xl: "140px",
                            "2xl": "160px",
                        }}
                    />
                </Box>
            </Box>

            {/* Cloud Point Ballon */}
            <Box
                position="absolute"
                top="60%"
                left="15%"
                transform="translateX(50%)"
                zIndex={3}
            >
                <Image
                    src="/images/cloud/cloudsmall.png"
                    alt="Small Cloud"
                    w={{
                        base: "60px",
                        sm: "80px",
                        md: "100px",
                        lg: "120px",
                        xl: "140px",
                        "2xl": "160px",
                    }}
                />

                <Box
                    className="woooosh-text"
                    position="absolute"
                    bottom="75%"
                    left="72%"
                    opacity={0}
                    transform="rotate(-5.47deg)"
                    color="black"
                    fontSize="3xl"
                    fontFamily="Bestime"
                    fontWeight="bold"
                >
                    Wooooosh!
                </Box>
            </Box>
        </Box>
    );
}
