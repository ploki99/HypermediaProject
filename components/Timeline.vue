<!--
    Vertical timeline component
-->

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="main-timeline">
                    <div v-for="e of events" class="timeline shadow">
                        <div class="timeline-content text-center text-sm-start">
                            <div class="timeline-icon"><i :class="'fa '+e.icon"></i></div>
                            <div class="timeline-year">{{ e.date }}</div>
                            <h3 class="title text-uppercase">{{ e.title }}</h3>
                            <p class="description"> {{ e.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .main-timeline .timeline{
        width: calc(50% + 70px);
        float: left;
    }
    .main-timeline .timeline:nth-child(even){
        float: right;
    } 
    
    .main-timeline .timeline-content{
        min-height: 130px;
        padding: 30px 150px 30px 30px;
        display: block;
        position: relative;
        background-color: var(--text-icons);
    }
    .main-timeline .timeline:nth-child(even) .timeline-content{ 
        padding: 30px 30px 30px 150px; 
    }

    /*Colored block*/
    .main-timeline .timeline-content:before{
        content: "";
        background-color: var(--accent-color);
        height: 100%;
        width: 70px;
        position: absolute;
        top: 0;
        right: 0;
    } 
    .main-timeline .timeline:nth-child(even) .timeline-content:before{
        right: auto;
        left: 0;
    }
    
    /*Color and position of the icons*/
    .main-timeline .timeline-icon{
        color: var(--text-icons);
        font-size: 40px;
        line-height: 40px;
        transform: translateY(-50%);
        position: absolute;
        top: 50%;
        right: 16px;
    }
    .main-timeline .timeline:nth-child(even) .timeline-icon{
        right: auto;
        left: 10px;
    }
    
    /*Position of the year*/
    .main-timeline .timeline-year{
        font-size: 40px;
        font-weight: 700;
        line-height: 40px;
        text-align: center;
        transform: translateY(-50%) rotate(90deg);
        position: absolute;
        top: 50%;
        right: 60px;
    }
    .main-timeline .timeline:nth-child(even) .timeline-year{
        right: auto;
        left: 60px;
    }

    /*Color and position of the title*/
    .main-timeline .title{
        color: var(--accent-color);
        font-size: 23px;
        font-weight: 600;
        margin: 0 0 5px;
    }
    
    /*Color of the even elements*/  
    .main-timeline .timeline:nth-child(even) .timeline-content:before{ background-color: var(--primary-color); }
    .main-timeline .timeline:nth-child(even) .title{ color: var(--primary-color); }

    @media screen and (max-width:767px){
        .main-timeline .timeline,
        .main-timeline .timeline:nth-child(even){
            width: 100%;
            margin: 0 0 30px;
        }
    }
    @media screen and (max-width:576px){
        .main-timeline .timeline .timeline-content,
        .main-timeline .timeline:nth-child(even) .timeline-content{
            padding: 130px 25px 25px;
        }
        .main-timeline .timeline .timeline-content:before,
        .main-timeline .timeline:nth-child(even) .timeline-content:before{
            height: 70px;
            width: 100%;
        }
        .main-timeline .timeline-icon,
        .main-timeline .timeline:nth-child(even) .timeline-icon{
            transform: translateY(0) translateX(-50%);
            top: 16px;
            left: 50%;
            right: auto;
        }
        .main-timeline .timeline-year,
        .main-timeline .timeline:nth-child(even) .timeline-year{
            transform: translateY(0) translateX(-50%);
            top: 80px;
            left: 50%;
            right: auto;
        }
    }
</style>

<script setup>
    //define props
    const props = defineProps(['events']);
</script>