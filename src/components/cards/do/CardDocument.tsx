"use client"

import { Box, Grid, Image, Heading } from "@chakra-ui/react"
import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
  
gsap.registerPlugin(ScrollTrigger)

interface CardDocumentProps {
  images: string[]
}

export default function CardDocument({ images }: CardDocumentProps) {
  const documentRef = useRef(null)

  useGSAP(
    () => {
      gsap.set(".doc-card", { opacity: 0, x: 100 })

      gsap.to(".doc-card", {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.15,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: documentRef.current,
          start: "top 75%", 
          end: "bottom 25%", 
          toggleActions: "play none none reverse",
        },
      })
    },
    { scope: documentRef }
  )

  return (
    <Box ref={documentRef}>
      <Heading
        textAlign="center"
        fontFamily="cursive"
        fontWeight="extrabold"
        fontSize={{ base: "2xl", md: "3xl" }}
        mb={10}
      >
        DOCUMENTATION
      </Heading>

      <Grid
        templateColumns={{ base: "1fr 1fr", lg: "repeat(3, 1fr)" }}
        gap={{ base: 4, md: 6 }}
      >
        {images.map((src, index) => {
          if (index >= 6) return null
          return (
            <Box
              key={index}
              className="doc-card"
              bg="white"
              border="2px solid"
              borderColor="brand.bg.black"
              rounded="xl"
              h={{ base: "200px", md: "450px" }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              overflow="hidden"
            >
              <Image
                src={src}
                alt={`Documentation ${index + 1}`}
                objectFit="cover"
                boxSize="100%"
              />
            </Box>
          )
        })}
      </Grid>
    </Box>
  )
}       