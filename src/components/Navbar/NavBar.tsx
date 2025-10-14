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
  Input,
  Popover,
  Image,
} from "@chakra-ui/react";
import { MdSearch, MdMenu, MdClose } from "react-icons/md";
import NextLink from "next/link";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useGSAP(() => {
    let idleTimeout: gsap.core.Tween | null = null;

    const nav = document.querySelector("nav") as HTMLElement;

    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 0);

      gsap.to(nav, { y: -100, opacity: 0, duration: 0.3 });

      if (idleTimeout) idleTimeout.kill();

      idleTimeout = gsap.to(
        {},
        {
          duration: 0.8,
          onComplete: () => {
            gsap.to(nav, { y: 0, opacity: 1, duration: 0.4 });
          },
        }
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (idleTimeout) idleTimeout.kill();
    };
  }, []);

  return (
    <HStack
      as="nav"
      w="100%"
      px={{ base: "6" , md: "16"}}
      py={{ base: "3" , md: "6"}}
      justify="space-between"
      align="center"
      position="fixed"
      top={0}
      left={0}
      zIndex={1000}
      transition="all 0.36s ease"
      bg={scrolled ? "rgba(0,0,0,0.4)" : "transparent"}
      backdropFilter={scrolled ? "blur(12px)" : "none"}
      borderBottom={scrolled ? "1px solid rgba(255,255,255,0.06)" : "none"}
    > 
      {/* Logo */}
      <Link as={NextLink} href="/" maxW="120px" display="block">
        <Image src="/images/logo/pixel.png" alt="Pixel Logo" />
      </Link>

      {/* Menu desktop */}
      <HStack
        as="ul"
        gap={8}
        fontWeight="medium"
        display={{ base: "none", md: "none", lg: "flex" }}
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
        <Link as={NextLink} color="white" href="#project">
          Karya & Proyek
        </Link>
        <Link as={NextLink} color="white" href="#testimoni">
          Testimoni
        </Link>
      </HStack>

      {/* Right side */}
      <HStack gap={3}>
        {/* Search popover */}
        <Popover.Root>
          <Popover.Trigger asChild>
            <IconButton
              aria-label="Search"
              display={{ base: "none", md: "none", lg: "flex" }}
              bg="transparent"
              color="white"
              _hover={{ bg: "rgba(255,255,255,0.1)" }}
              size="sm"
              rounded="full"
            >
              <MdSearch />
            </IconButton>
          </Popover.Trigger>
          <Portal>
            <Popover.Positioner>
              <Popover.Content
                bg="rgba(255,255,255,0.95)"
                backdropFilter="blur(10px)"
                px={3}
                py={1}
                rounded="full"
                shadow="md"
                border="1px solid rgba(255,255,255,0.3)"
                w="200px"
              >
                <Popover.Arrow borderColor="transparent" />
                <Popover.Body p={0}>
                  <HStack w="full">
                    <Input
                      placeholder="Search..."
                      size="sm"
                      flex="1"
                      border="none"
                      autoFocus
                      bg="transparent"
                      _focus={{ outline: "none", boxShadow: "none" }}
                      _placeholder={{ color: "gray.500", fontSize: "sm" }}
                    />
                    <MdSearch color="black" size={18} />
                  </HStack>
                </Popover.Body>
              </Popover.Content>
            </Popover.Positioner>
          </Portal>
        </Popover.Root>

        {/* Login button */}
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

        {/* Mobile drawer */}
        <Drawer.Root>
          <Drawer.Trigger asChild>
            <IconButton
              aria-label="Open menu"
              display={{ base: "flex", md: "flex", lg: "none" }}
              bg="transparent"
              color="white"
            >
              <MdMenu />
            </IconButton>
          </Drawer.Trigger>

          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content maxW="320px" bg="black" color="white" p={5}>
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

                  {/* Search bar mobile */}
                  <HStack bg="white" rounded="full" px={3} py={1} w="full">
                    <Input
                      placeholder="Search..."
                      size="sm"
                      flex="1"
                      border="none"
                      bg="transparent"
                      color="gray.900"
                      style={{ caretColor: "#111" }}
                      autoFocus
                      _focus={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                      _hover={{ border: "none" }}
                      _placeholder={{ color: "gray.500", fontSize: "sm" }}
                    />
                    <MdSearch color="black" />
                  </HStack>
                </VStack>

                {/* Links mobile */}
                <VStack align="start" gap={5} mt={6}>
                  <Link as={NextLink} color="white" href="#home">
                    Beranda
                  </Link>
                  <Link as={NextLink} color="white" href="#about">
                    Tentang
                  </Link>
                  <Link as={NextLink} color="white" href="#profil">
                    Profil
                  </Link>
                  <Link as={NextLink} color="white" href="#project">
                    Karya & Proyek
                  </Link>
                  <Link as={NextLink} color="white" href="#testimoni">
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
