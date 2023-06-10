<!--
    Slideshow component
-->

<template>

    <!-- Carousel -->
    <div :id="id" class="carousel slide" data-bs-ride="carousel">

        <!-- Indicators/dots -->
        <div class="carousel-indicators">
            <span v-for="i of classes.length">
                <button :data-bs-target="'#'+id" :data-bs-slide-to="i-1" :class="classes[i-1]"></button>
            </span>   
        </div>

        <!-- The slideshow/carousel -->
        <div class="carousel-inner">
            <span v-for="i of names.length">
                <div :class="'carousel-item '+classes[i-1]">
                    <img :src="images[pictures[i-1]]" alt="" class="d-block w-100">
                    <div class="carousel-caption container">
                        <h5>{{ names[i-1] }}</h5>
                        <NuxtLink :to="links[i-1]" class="btn btn-primary btn-sm">Discover more</NuxtLink>
                    </div>
                </div>
            </span>
        </div>

        <!-- Left and right controls/icons -->
        <button class="carousel-control-prev" :data-bs-target="'#'+id" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" :data-bs-target="'#'+id" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
    </div>

</template>

<script setup>
    //define props
    const props = defineProps(['id','names','pictures','links']);
    //
    const classes = ['active'];
    for(let i=1; i<props.names.length; i++)
        classes.push('');
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