import { defineNuxtConfig } from "nuxt"

export default defineNuxtConfig({
    ssr: true,
    bridge: {
        nitro: false,
    },
    head: {
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: "",
            },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
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
