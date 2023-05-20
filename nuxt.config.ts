// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    
    css: [
        '~/assets/css/general.css'
    ],

    modules:[
        '@nuxtjs/supabase',
        '@pinia/nuxt'
    ],
    
    pinia: {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
        ],
    },
    //auto imports the directory where we put the Pinia stores
    imports: {
        dirs: ['stores'],
    },

    ssr: true,

    app:{
        head:{
            title : "Bright Futures",
            //bootstrap 5 css
            link:[
                {href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css", rel:"stylesheet"}
            ],
            //bootstrap 5 js
            script: [
                { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'}
            ],
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
