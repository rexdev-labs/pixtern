"use client";

import { HStack, IconButton, Link, Button } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";
import NextLink from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false); // cek scroll > 0
  const idleTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 0); // kalau lebih dari 0 → aktifkan glass effect

      // setiap scroll → sembunyikan navbar
      setVisible(false);

      // reset timer
      if (idleTimeout.current) clearTimeout(idleTimeout.current);

      idleTimeout.current = setTimeout(() => {
        // setelah idle → munculkan lagi navbar
        setVisible(true);
      }, 800); // delay idle (ms)
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (idleTimeout.current) clearTimeout(idleTimeout.current);
    };
  }, []);

  return (
    <HStack
      as="nav"
      w="100%"
      px={8}
      py={4}
      justify="space-between"
      align="center"
      position="fixed"
      top={0}
      left={0}
      zIndex={1000}
      transition="all 0.4s ease"
      transform={visible ? "translateY(0)" : "translateY(-100%)"}
      opacity={visible ? 1 : 0}
      bg={scrolled ? "rgba(0,0,0,0.4)" : "transparent"} // transparan di top, glass saat scroll
      backdropFilter={scrolled ? "blur(12px)" : "none"}
      borderBottom={scrolled ? "1px solid rgba(255,255,255,0.1)" : "none"}
    >
      {/* Logo */}
      <Link as={NextLink} href="/" maxW={"120px"}>
        <img src="/images/logo/pixel.png" alt="Pixel Logo" />
      </Link>

      {/* Menu */}
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

      {/* Search + Button */}
      <HStack gap={4}>
        <IconButton aria-label="Search" bg="transparent" color="white">
          <MdSearch />
        </IconButton>

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
      </HStack>
    </HStack>
  );
}
