<template>

    <div class="card" :style="cardWidth" >
        <img class="card-img-top" :src="images[pic_name]" :alt="title + ' image'">
        <div class="card-body">
            <h4 class="card-title">{{ title }}</h4>
            <p class="card-text">{{ subtitle }}</p>
            <div class="text-center">
                <NuxtLink :to = "link" class="btn btn-primary">More details</NuxtLink>
            </div>
        </div>
    </div>

</template>

<script setup>
    //define props
    const props = defineProps(['pic_name', 'title', 'subtitle', 'link','width']);
    //get all images
    const images = getAllImages();
    //define cardWidth
    const cardWidth = "width: " + props.width;
</script>

<style>
    .card{
        margin-left: 40px;
        margin-bottom: 20px;
    }
    .card img{
        margin-top: 10px;
    }
    .btn-primary{
        background-color: var(--accent-color);
        border-color: var(--accent-color);
    }
    .btn-primary:hover{
        background-color: var(--accent-color2);
        border-color: var(--accent-color2);
    }
</style>