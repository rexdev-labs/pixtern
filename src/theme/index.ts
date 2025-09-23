import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
    globalCss: {
        html: {
            bg: "#EFFFFF",
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

                        // 🔵 Blues
                        blue: {
                            primary: { value: "#0781E6" },
                            sky: { value: "#35A1FB" },
                            aqua: { value: "#8BE0FF" },
                            cyan: { value: "#00E6F7" },
                        },

                        // 🟢 Greens
                        green: {
                            emelard: { value: "#12C478" },
                            mint: { value: "#5CFFA5" },
                            lime: { value: "#89FF3A" },
                            softLime: { value: "#D6FF64" },
                            forest: { value: "#085029" },
                            lightAqua: { value: "#A7FFF0" },
                        },

                        // 🟡 Yellows
                        yellow: {
                            primary: { value: "#FFBF1C" },
                            bright: { value: "#FFE424" },
                        },

                        // 🟣 Purples
                        purple: { value: "#9D83FE" },

                        // 🩷 Pink
                        pink: { value: "#F225B3" },

                        // 🟠 Orange
                        orange: {
                            value: "#00E6F7",
                            lightAqua: { value: "#A7FFF0" },
                        },
                    },
                    text: {
                        black: { value: "#080427" },
                        white: { value: "#EFFFFF" },
                        gray: { value: "#2A2A2A" },
                        blue: { value: "#0781E6" },
                        orange: { value: "#FF6E1D" },
                        green: { value: "#085029" },
                    },
                    btn: {
                        primary: { value: "#FFBF1C" },
                    },
                },
            },
            fonts: {
                body: { value: "var(--font-lexend)" },
                heading: { value: "var(--font-inter)" },
                cursive: { value: "var(--font-neulis)" },
                bestime: { value: "var(--font-bestime)" },
            },
        },
    },
});

export const system = createSystem(defaultConfig, config);
