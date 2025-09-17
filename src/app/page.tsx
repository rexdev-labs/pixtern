import { Button, HStack } from "@chakra-ui/react";
import HeroSection from "@/components/sections/HeroSection";
import ProfileSection from "@/components/sections/ProfileSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <ProfileSection />
        </>
    );
}
