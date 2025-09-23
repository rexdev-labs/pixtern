"use client";

import {
    HStack,
    VStack,
    IconButton,
    Link,
    Button,
    Portal,
    Drawer,
    Box,
} from "@chakra-ui/react";
import { MdSearch, MdMenu, MdClose } from "react-icons/md";
import NextLink from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
    const [visible, setVisible] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const idleTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;
            setScrolled(y > 0);
            setVisible(false);

            if (idleTimeout.current) clearTimeout(idleTimeout.current);
            idleTimeout.current = setTimeout(() => setVisible(true), 800);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (idleTimeout.current) clearTimeout(idleTimeout.current);
        };
    }, []);

    return (
        <HStack
            as="nav"
            w="100%"
            px={6}
            py={3}
            justify="space-between"
            align="center"
            position="fixed"
            top={0}
            left={0}
            zIndex={1000}
            transition="all 0.36s ease"
            transform={visible ? "translateY(0)" : "translateY(-100%)"}
            opacity={visible ? 1 : 0}
            bg={scrolled ? "rgba(0,0,0,0.4)" : "transparent"}
            backdropFilter={scrolled ? "blur(12px)" : "none"}
            borderBottom={
                scrolled ? "1px solid rgba(255,255,255,0.06)" : "none"
            }
        >
            {/* Logo */}
            <Link as={NextLink} href="/" maxW="120px" display="block">
                <img src="/images/logo/pixel.png" alt="Pixel Logo" />
            </Link>

            {/* Desktop Menu */}
            <HStack
                as="ul"
                gap={8}
                fontWeight="medium"
                display={{ base: "none", md: "flex" }}
            >
                <Link as={NextLink} color="white" href="#home">
                    Beranda
                </Link>
                <Link as={NextLink} color="white" href="#about">
                    Tentang
                </Link>
                <Link as={NextLink} color="white" href="#profil">
                    Profil
                </Link>
                <Link as={NextLink} color="white" href="#projects">
                    Karya & Proyek
                </Link>
                <Link as={NextLink} color="white" href="#testimoni">
                    Testimoni
                </Link>
            </HStack>

            <HStack gap={3}>
                {/* Search button (desktop only) */}
                <IconButton
                    aria-label="Search"
                    bg="transparent"
                    color="white"
                    display={{ base: "none", md: "flex" }}
                >
                    <MdSearch />
                </IconButton>

                {/* Login button*/}
                <Button
                    bg="brand.btn.primary"
                    size="md"
                    maxH="8"
                    maxW="32"
                    color="black"
                    rounded="full"
                >
                    Login
                </Button>

                {/* Hamburger (mobile only) */}
                <Drawer.Root
                    open={open}
                    onOpenChange={(evt) => setOpen(evt.open)}
                >
                    <Drawer.Trigger asChild>
                        <IconButton
                            aria-label="Open menu"
                            display={{ base: "flex", md: "none" }}
                            bg="transparent"
                            color="white"
                        >
                            <MdMenu />
                        </IconButton>
                    </Drawer.Trigger>

                    <Portal>
                        <Drawer.Backdrop />
                        <Drawer.Positioner>
                            <Drawer.Content
                                maxW="320px"
                                bg="black"
                                color="white"
                                p={5}
                            >
                                <VStack align="stretch" gap={4}>
                                    <HStack justify="space-between">
                                        <Box as="span" fontWeight="semibold">
                                            Menu
                                        </Box>
                                        <Drawer.CloseTrigger asChild>
                                            <IconButton
                                                aria-label="Close menu"
                                                bg="transparent"
                                                color="white"
                                            >
                                                <MdClose />
                                            </IconButton>
                                        </Drawer.CloseTrigger>
                                    </HStack>

                                    <IconButton
                                        aria-label="Search"
                                        bg="transparent"
                                        color="white"
                                        w="fit-content"
                                    >
                                        <MdSearch />
                                    </IconButton>
                                </VStack>

                                {/* Links */}
                                <VStack align="start" gap={5} mt={6}>
                                    <Link
                                        as={NextLink}
                                        href="#home"
                                        onClick={() => setOpen(false)}
                                    >
                                        Beranda
                                    </Link>
                                    <Link
                                        as={NextLink}
                                        href="#about"
                                        onClick={() => setOpen(false)}
                                    >
                                        Tentang
                                    </Link>
                                    <Link
                                        as={NextLink}
                                        href="#profil"
                                        onClick={() => setOpen(false)}
                                    >
                                        Profil
                                    </Link>
                                    <Link
                                        as={NextLink}
                                        href="#projects"
                                        onClick={() => setOpen(false)}
                                    >
                                        Karya & Proyek
                                    </Link>
                                    <Link
                                        as={NextLink}
                                        href="#testimoni"
                                        onClick={() => setOpen(false)}
                                    >
                                        Testimoni
                                    </Link>
                                </VStack>
                            </Drawer.Content>
                        </Drawer.Positioner>
                    </Portal>
                </Drawer.Root>
            </HStack>
        </HStack>
    );
}
