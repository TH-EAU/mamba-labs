import {
    createSystem,
    defaultConfig,
    defineConfig,
} from "@chakra-ui/react"

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                brand: {
                    50: { value: "#f1ebff" },
                    100: { value: "#d8caff" },
                    200: { value: "#b49cff" },
                    300: { value: "#8d6aff" },
                    400: { value: "#6439FD" }, // Couleur principale
                    500: { value: "#4d2dd1" },
                    600: { value: "#3a22a4" },
                    700: { value: "#291878" },
                    800: { value: "#190f4d" },
                    900: { value: "#0c0626" },
                },
                background: {
                    default: { value: "#1C1919" },
                },
                text: {
                    primary: { value: "#FFFFFF" },
                    secondary: { value: "#D1D1D1" },
                },
            },
            fonts: {
                heading: { value: "'Space Grotesk', sans-serif" },
                body: { value: "'Manrope', sans-serif" },
            },
            radii: {
                xl: { value: "1rem" },
                full: { value: "9999px" },
            },
        },
        semanticTokens: {
            colors: {
                bg: {
                    default: { value: "{colors.background.default}" },
                },
                fg: {
                    default: { value: "{colors.text.primary}" },
                    muted: { value: "{colors.text.secondary}" },
                },
                accent: {
                    default: { value: "{colors.brand.400}" },
                },
                a: {
                    default: { value: "{colors.gray.500}" }
                }
            },
        },
    },
})

export const system = createSystem(defaultConfig, config)
