import { defineNuxtConfig } from "nuxt"

export default defineNuxtConfig({
    ssr: true,
    bridge: {
        nitro: false,
    },
    buildModules: ["nuxt-windicss"],
    css: ["virtual:windi.css"],
    windicss: {
        scan: {
            dirs: ["./"],
            fileExtensions: [".vue", ".js", ".ts"],
            exclude: ["node_modules", "dist"],
        },
    },
    build: {
        transpile: [
            "majestic-ui",
        ],
    },
})
