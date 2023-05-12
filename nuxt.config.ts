// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '~/assets/css/general.css',
        '~/node_modules/bootstrap/dist/css/bootstrap.min.css'
    ],

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
    },

    app:{
        head:{
            title : "Venture capital",
            charset: "utf-8",
            meta: [
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1" 
                }
            ]
        }
    }

})
