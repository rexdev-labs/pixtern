import { HStack, IconButton, Link, Button } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";
import NextLink from "next/link";

export default function Navbar() {
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
      bg="transparent"
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
        
        display={{ base: "none", md: "flex" }}>
        <Link as={NextLink} color="white" href="#home">Beranda</Link>
        <Link as={NextLink} href="#about" color="white">Tentang</Link>
        <Link as={NextLink} color="white" href="#profil">Profil</Link>
        <Link as={NextLink} color="white" href="#projects">Karya & Proyek</Link>
        <Link as={NextLink} color="white" href="#testimoni">Testimoni</Link>
      </HStack>

      <HStack gap={4}>
        <IconButton
          aria-label="Search"
          bg="transparent"
          color="white"
        >
          <MdSearch />
        </IconButton>

        <Button bg="brand.btn.primary" size="md" maxH="8" maxW="32" color="black" rounded="full">
          Login
        </Button>
      </HStack>
    </HStack>
  );
}
