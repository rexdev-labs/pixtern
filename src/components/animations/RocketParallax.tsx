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
                    markers: true,
                },
            });

            tl.fromTo(
                ".group1",
                { y: 3000 }, 
                { y: -2000, ease: "none" },
                0 
            );

            tl.fromTo(
                ".cloud2",
                { y: 2000 },
                { y: -500, ease: "none" },
                0 
            );

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

    return (
        <Box
            ref={parallaxRef}
            position="absolute"
            top="0"
            left={0}
            w="100%"
            h="200vh"
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

            <Box className="cloud2" position="relative" w="100%">
                <Image
                    src="/images/cloud/cloud2.svg"
                    w="100%"
                    h="auto"
                    alt=""
                />
            </Box>
        </Box>
    );
}