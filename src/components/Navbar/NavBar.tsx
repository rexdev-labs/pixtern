"use client";

import {
  HStack,
  VStack,
  IconButton,
  Link,
  Portal,
  Drawer,
  Box,
  Input,
  Popover,
  Image,
} from "@chakra-ui/react";
import { MdSearch, MdMenu, MdClose } from "react-icons/md";
import { useGlobalData } from "@/components/provider/GlobalDataProvider";
import { useGSAP } from "@gsap/react";
import { useState, useRef } from "react";
import NextLink from "next/link";
import gsap from "gsap";

interface NavbarProps {
  theme?: "light" | "dark";
}

export default function Navbar({ theme = "light" }: NavbarProps) {
  const { navbar } = useGlobalData()!;
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useGSAP(() => {
    let idleTimeout: gsap.core.Tween | null = null;

    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 0);

      gsap.to(navbarRef.current, { y: -100, opacity: 0, duration: 0.3 });

      if (idleTimeout) idleTimeout.kill();

      idleTimeout = gsap.to(
        {},
        {
          duration: 0.8,
          onComplete: () => {
            gsap.to(navbarRef.current, { y: 0, opacity: 1, duration: 0.4 });
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
      ref={navbarRef}
      as="nav"
      w="100%"
      px={{ base: "6", md: "16" }}
      py={{ base: "3", md: "6" }}
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
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${
            theme === "light" && !scrolled
              ? navbar.darkIcon.url
              : navbar.lightIcon.url
          }`}
          alt="Pixel Logo"
        />
      </Link>

      {/* Menu desktop */}
      <HStack
        as="ul"
        gap={8}
        fontWeight="medium"
        display={{ base: "none", md: "none", lg: "flex" }}
      >
        {navbar.navigations?.map((route) => (
          <Link
            key={route.title}
            as={NextLink}
            color={theme === "light" && !scrolled ? "black" : "white"}
            href={route.href}
          >
            {route.title}
          </Link>
        ))}
      </HStack>

      {/* Right side */}
      <HStack gap={3}>
        <Popover.Root>
          <Popover.Trigger asChild>
            <IconButton
              aria-label="Search"
              display={{ base: "none", md: "none", lg: "flex" }}
              bg="transparent"
              color={theme === "light" && !scrolled ? "black" : "white"}
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

        {/* Mobile drawer */}
        <Drawer.Root>
          <Drawer.Trigger asChild>
            <IconButton
              aria-label="Open menu"
              display={{ base: "flex", md: "flex", lg: "none" }}
              bg="transparent"
              color={theme === "light" ? "black" : "white"}
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
                        color={theme === "light" ? "black" : "white"}
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
                  {navbar.navigations?.map((route) => (
                    <Link
                      key={route.title}
                      as={NextLink}
                      color="white"
                      href={route.href}
                    >
                      {route.title}
                    </Link>
                  ))}
                </VStack>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      </HStack>
    </HStack>
  );
}
