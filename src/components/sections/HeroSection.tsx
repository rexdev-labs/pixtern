"use client";

import { Box, Button, Container, Image, Flex } from "@chakra-ui/react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const floatRefs = useRef<Array<HTMLImageElement | null>>([]);
    const hoverRefs = useRef<Array<HTMLImageElement | null>>([]);

    const setFloatRef = (el: HTMLImageElement | null, idx: number) => {
        floatRefs.current[idx] = el;
    };
    const setHoverRef = (el: HTMLImageElement | null, idx: number) => {
        hoverRefs.current[idx] = el;
    };

    useGSAP(() => {
        if (!containerRef.current) return;

        const nodes =
            containerRef.current.querySelectorAll<HTMLElement>(".parallax");
        const bgNodes =
            containerRef.current.querySelectorAll<HTMLElement>(".parallax-bg");

        const nodeX = Array.from(nodes).map((el) =>
            gsap.quickTo(el, "xPercent", { duration: 1.2, ease: "power2.out" })
        );
        const nodeY = Array.from(nodes).map((el) =>
            gsap.quickTo(el, "yPercent", { duration: 1.2, ease: "power2.out" })
        );

        const bgX = Array.from(bgNodes).map((el) =>
            gsap.quickTo(el, "xPercent", { duration: 1.2, ease: "power2.out" })
        );
        const bgY = Array.from(bgNodes).map((el) =>
            gsap.quickTo(el, "yPercent", { duration: 1.2, ease: "power2.out" })
        );

        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 2;
            const y = (e.clientY / innerHeight - 0.5) * 2;

            nodeX.forEach((tween, i) => tween(x * (i * 0.6 + 0.5)));
            nodeY.forEach((tween, i) => tween(y * (i * 0.6 + 0.5)));

            bgX.forEach((tween, i) => tween(x * (i * 1 + 1)));
            bgY.forEach((tween, i) => tween(y * (i * 1 + 1)));
        };

        // Floating effect
        floatRefs.current.forEach((el) => {
            if (!el) return;
            gsap.to(el, {
                y: "+=20",
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        });

        // Mousemove listener
        window.addEventListener("mousemove", handleMouseMove);

        // Hover zoom
        const hoverListenerStore: Array<{
            el: HTMLElement;
            enter: EventListener;
            leave: EventListener;
        }> = [];

        hoverRefs.current.forEach((el) => {
            if (!el) return;
            const enter: EventListener = (() => {
                gsap.to(el, {
                    scale: 1.12,
                    duration: 0.45,
                    ease: "power3.out",
                });
            }) as unknown as EventListener;
            const leave: EventListener = (() => {
                gsap.to(el, {
                    scale: 1,
                    duration: 0.45,
                    ease: "power3.out",
                });
            }) as unknown as EventListener;

            el.addEventListener("mouseenter", enter);
            el.addEventListener("mouseleave", leave);

            hoverListenerStore.push({ el, enter, leave });
        });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            hoverListenerStore.forEach(({ el, enter, leave }) => {
                el.removeEventListener("mouseenter", enter);
                el.removeEventListener("mouseleave", leave);
            });
        };
    }, []);

    return (
        <Box
            as="section"
            position="relative"
            minH="100vh"
            overflow="hidden"
            bg="brand.hero"
            ref={containerRef}
        >
            <Container
                maxW="7xl"
                marginTop="20"
                position="relative"
                zIndex={50}
            >
                <Flex
                    direction="column"
                    align="center"
                    justify="center"
                    py={10}
                    gap={10}
                >
                    <Image
                        src="/images/logo/logo.png"
                        alt="Logo"
                        maxW="400px"
                        mb={6}
                        filter="drop-shadow(0px -6px 25px rgba(255,255,255,0.25))"
                        className="parallax"
                        ref={(el) => setHoverRef(el, 0)}
                    />
                    <Button
                        size="xs"
                        bg="white"
                        color="brand.text.black"
                        _hover={{ bg: "gray.200" }}
                        rounded="full"
                        w={120}
                        fontFamily="heading"
                        borderColor="brand.bg.black"
                        borderWidth={2}
                        shadow="0px 0px 6px 0px rgba(255,255,255,0.75)"
                        className="parallax"
                        ref={(el) => {
                            // @ts-ignore
                            setHoverRef(
                                el as unknown as HTMLImageElement | null,
                                1
                            );
                        }}
                    >
                        Join Us
                    </Button>
                </Flex>
            </Container>

            {/* PLANETS */}
            <Image
                src="/images/float/planet2.png"
                alt="Saturn"
                position="absolute"
                top="1%"
                left="16%"
                boxSize={{ base: "80px", md: "150px" }}
                zIndex={20}
                className="parallax"
                ref={(el) => setFloatRef(el, 0)}
            />
            <Image
                src="/images/float/planet1.png"
                alt="Mars"
                position="absolute"
                top="10%"
                right="4%"
                maxW="44"
                zIndex={20}
                className="parallax"
                ref={(el) => setFloatRef(el, 1)}
            />
            <Image
                src="/images/float/planet3.png"
                alt="Jupiter"
                position="absolute"
                bottom="40%"
                right="12%"
                maxW="44"
                zIndex={20}
                className="parallax"
                ref={(el) => setFloatRef(el, 2)}
            />
            <Image
                src="/images/float/moon.png"
                alt="Moon"
                position="absolute"
                bottom="45%"
                left="3%"
                w="72"
                zIndex={20}
                className="parallax"
                ref={(el) => setFloatRef(el, 3)}
            />

            {/* STARS */}
            <Image
                src="/images/float/starpurple.png"
                alt="StarPurple1"
                position="absolute"
                top="12%"
                left="8%"
                maxW="7"
                rotate="210deg"
                zIndex={20}
                className="parallax"
                ref={(el) => setFloatRef(el, 4)}
            />
            <Image
                src="/images/float/staryellow.png"
                alt="StarYellow"
                position="absolute"
                top="50%"
                left="1%"
                maxW="8"
                rotate="110deg"
                zIndex={20}
                className="parallax"
                ref={(el) => setFloatRef(el, 5)}
            />
            <Image
                src="/images/float/starred.png"
                alt="StarRed"
                position="absolute"
                top="12%"
                right="25%"
                maxW="10"
                rotate="170deg"
                zIndex={20}
                className="parallax"
                ref={(el) => setFloatRef(el, 6)}
            />
            <Image
                src="/images/float/starpurple.png"
                alt="StarPurple2"
                position="absolute"
                top="39%"
                right="31%"
                maxW="10"
                rotate="30deg"
                zIndex={51}
                className="parallax"
                ref={(el) => setFloatRef(el, 7)}
            />
            <Image
                src="/images/float/stargreen.png"
                alt="StarGreen"
                position="absolute"
                top="63%"
                right="23%"
                maxW="7"
                rotate="90deg"
                zIndex={20}
                className="parallax"
                ref={(el) => setFloatRef(el, 8)}
            />

            {/* CHARACTERS */}
            <Box position="relative" minH="50vh">
                <Image
                    src="/images/char/character1.png"
                    alt="Character Left"
                    position="absolute"
                    bottom="0"
                    left="1%"
                    w="64"
                    zIndex={20}
                    className="parallax-bg"
                    ref={(el) => setHoverRef(el, 2)}
                />
                <Image
                    src="/images/char/character2.png"
                    alt="Character Right"
                    position="absolute"
                    bottom="20%"
                    right="0%"
                    w="60"
                    zIndex={20}
                    className="parallax-bg"
                    ref={(el) => setHoverRef(el, 3)}
                />
                <Image
                    src="/images/char/character3.png"
                    alt="Character Left"
                    position="absolute"
                    bottom="55%"
                    left="20%"
                    w="60"
                    zIndex={20}
                    className="parallax-bg"
                    ref={(el) => setHoverRef(el, 4)}
                />
                <Image
                    src="/images/char/character4.png"
                    alt="Character Right"
                    position="absolute"
                    bottom="55%"
                    right="25%"
                    w="36"
                    zIndex={20}
                    className="parallax-bg"
                    ref={(el) => setHoverRef(el, 5)}
                />

                <Image
                    src="/images/bg/land.png"
                    alt="Planet Surface"
                    position="absolute"
                    bottom="0"
                    left="0"
                    w="100%"
                    objectFit="cover"
                    zIndex={1}
                    data-speed-x="0.5"
                    data-speed-y="0.3"
                />
                <Image
                    src="/images/bg/cloud.png"
                    alt="Cloud"
                    position="absolute"
                    bottom="0"
                    w="100%"
                    objectFit="cover"
                    zIndex={0}
                />
            </Box>
        </Box>
    );
}
