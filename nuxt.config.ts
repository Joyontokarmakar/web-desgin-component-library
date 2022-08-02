import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    title: 'JK Admin Panel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'web-design-component-library',
        name: 'Web Design Component Library',
        content: 'This project is made for store all of my designed component for website design and development by using various kind of css and js library. This project is made with Nuxt-js. I hope I will able to store all kind of component. In future I will upload JavaScript functional component. for more of my work, you can visit my github profile (https://github.com/joyontokarmakar). If you want to know about me, please visit (https://joyontokarmakar.netlify.app). Thank You.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  // googleAnalytics: {
  //   id: 'G-JB1GJZEJMH'
  // },
  // publicRuntimeConfig: {
  //   axios: {
  //     baseURL: baseUrl,
  //   },
  // },
  // modules: ["@nuxtjs/sitemap",["@nuxtjs/axios", { proxyHeaders: false }], "@nuxtjs/proxy"],

  buildModules: [
    // '@nuxtjs/google-analytics',
    "@nuxtjs/tailwindcss"
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    // config: {},
    injectPosition: 0,
    viewer: true,
  }
});
