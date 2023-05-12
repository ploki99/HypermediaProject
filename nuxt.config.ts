// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    
    css: [
        '~/assets/css/general.css',
        '~/node_modules/bootstrap/dist/css/bootstrap.min.css'
    ],

    modules:['@nuxtjs/supabase'],
    
    ssr: true,

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
