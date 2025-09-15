import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
    globalCss: {
        body: {
            bg: "#fffefa",
        },
    },
    theme: {
        tokens: {
            colors: {
                brand: {
                    bg: { value: "#06041C" },
                },
            },
            fonts: {
                body: { value: "Lexend Deca, sans-serif" },
                heading: { value: "Lexend Deca, sans-serif" },
                cursive: { value: "Neulis Cursive, cursive" },
            },
        },
    },
});

export const system = createSystem(defaultConfig, config);
