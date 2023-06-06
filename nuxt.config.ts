// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    
    css: [
        '~/assets/css/general.css'
    ],

    modules:[
        '@nuxtjs/supabase',
        '@pinia/nuxt',
        '@nuxtjs/robots'
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
            //set default title
            title : "Bright Futures",
            //bootstrap 5 css
            link:[
                {href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css", rel:"stylesheet"}
            ],
            //javscript libraries
            script: [        
                //bootstrap 5 js 
                { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'},
                //Chart.js
                { src: "https://cdn.jsdelivr.net/npm/chart.js"},
                { src: "https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2"},
                //fontawesone library (used for icons)
                { src: "https://kit.fontawesome.com/13b677acda.js", crossorigin:"anonymous"}
            ],
            //define charset
            charset: "utf-8",
            //define language
            htmlAttrs:{
                lang: "en"
            },
            //define meta
            meta: [
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1" 
                },
                {
                    name: "robots",
                    content: "index"
                }
            ]
        }
    }

})
