<!--
    Slideshow component
-->

<template>

    <!-- Carousel -->
    <div :id="id" class="carousel slide" data-bs-ride="carousel">

        <!-- Indicators/dots -->
        <div class="carousel-indicators">
            <span v-for="i of indexes">
                <button v-if="i===0" type="button" :data-bs-target="'#'+id" :data-bs-slide-to="i" class="active"></button>
                <button v-if="i>0" type="button" :data-bs-target="'#'+id" :data-bs-slide-to="i"></button>    
            </span>   
        </div>

        <!-- The slideshow/carousel -->
        <div class="carousel-inner">
            <span v-for="i of indexes">
                <div v-if="i===0" class="carousel-item active">
                    <img :src="images[carouselData[i].picture]" alt="" class="d-block w-100">
                    <div class="carousel-caption container">
                        <h5>{{ carouselData[i].name }}</h5>
                        <NuxtLink :to="carouselData[i].link" class="pageLink">See more</NuxtLink>
                    </div>
                </div>
                <div v-if="i>0" class="carousel-item">
                    <img :src="images[carouselData[i].picture]" alt="" class="d-block w-100">
                    <div class="carousel-caption container">
                        <h5>{{ carouselData[i].name }}</h5>
                        <NuxtLink :to="carouselData[i].link" class="pageLink">See more</NuxtLink>
                    </div>
                </div>
            </span>
        </div>

        <!-- Left and right controls/icons -->
        <button class="carousel-control-prev" type="button" :data-bs-target="'#'+id" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" :data-bs-target="'#'+id" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
    </div>

</template>

<script setup>
    //define props
    const props = defineProps(['id','indexes','carouselData']);
    //get all images
    const images = getAllImages();

</script>

<style>
    .carousel-caption{
        background-color: var(--primary-text);
        opacity: 0.9;
        left: 0;
        padding-bottom: 3rem;
        bottom: 0;
        width: 100%;
        position: relative;
    }
    .carousel-caption h5{
        color: var(--text-icons);
    }
</style>