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
                    hero: {
                        value: "linear-gradient(to bottom left, #27044F 1%, transparent 40%), #06041C",
                    },
                    bg: {
                        black: { value: "#06041C" },
                        white: { value: "#EFFFFF" },
                    },
                    text: {
                        black: { value: "#080427" },
                        white: { value: "#EFFFFF" },
                    },
                    btn: {
                        primary: { value: "#FFBF1C" },
                    },
                },
            },
            fonts: {
                body: { value: "Lexend Deca, sans-serif" },
                heading: { value: "Inter, sans-serif" },
                cursive: { value: "Neulis Cursive, cursive" },
                decorative: { value: "Bestime, cursive" },
            },
        },
    },
});

export const system = createSystem(defaultConfig, config);
