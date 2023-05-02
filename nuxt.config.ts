// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    serverHandlers: [
        {
            route: '/server',
            handler: '~/server/index.js',
            middleware: true
        }
    ],
    ssr: true,
    runtimeConfig: {
        public:{
            baseURL: "http://localhost:3000"
        }
    }

})
