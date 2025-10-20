"use client"

import { Flex, Grid, GridItem, Heading, Icon } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { splitTextFirst } from "@/utils/splitText";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

export default function HeaderDo() {
    const router = useRouter();
    const headerDoRef = useRef(null);
    const [splitFirst, rest] = splitTextFirst("What We Do");

    useGSAP(
        () => {
            gsap.set(".scramble-first, .scramble-rest", { text: "" });
            gsap.set(".button-back", { opacity: 0, x: -50 });

            document.fonts?.ready?.then(() => {
                ScrollTrigger.create({
                    trigger: ".title-do",
                    start: "top 95%",
                    toggleActions: "play none none none",
                    animation: gsap
                        .timeline()
                        .to(".scramble-first", {
                            duration: 1.2,
                            scrambleText: {
                                text: splitFirst,
                                chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                                revealDelay: 0.4,
                                speed: 0.4,
                            },
                        })
                        .to(
                            ".scramble-rest",
                            {
                                duration: 1.2,
                                scrambleText: {
                                    text: rest,
                                    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                                    revealDelay: 0.4,
                                    speed: 0.4,
                                },
                            },
                            "-=0.8"
                        ),
                });
            });

            ScrollTrigger.create({
                trigger: ".button-back",
                start: "top 95%",
                toggleActions: "play none none none",
                animation: gsap.to(".button-back", {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: "sine.out",
                }),
            });
        },
        { scope: headerDoRef }
    );

    return (
        <Grid ref={headerDoRef} templateColumns="1fr auto 1fr" mb="4" gap="4">
            <GridItem
                className="button-back"
                onClick={() => router.back()}
                cursor="pointer"
            >
                <Icon as={FaArrowLeft} boxSize={8} />
            </GridItem>

            <GridItem colSpan={1}>
                <Flex className="title-do" gap={2} justifyContent="center">
                    <Heading
                        className="scramble-first"
                        fontFamily="bestime"
                        fontSize={{
                            base: "2xl",
                            md: "4xl",
                            lg: "5xl",
                        }}
                        fontWeight="normal"
                        color="brand.text.black"
                    >
                        {splitFirst}
                    </Heading>
                    <Heading
                        className="scramble-rest"
                        fontFamily="bestime"
                        fontSize={{
                            base: "2xl",
                            md: "4xl",
                            lg: "5xl",
                        }}
                        color="brand.text.orange"
                        fontWeight="normal"
                    >
                        {rest}
                    </Heading>
                </Flex>
            </GridItem>
        </Grid>
    )
}