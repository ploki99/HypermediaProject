<!--
    Card component
-->

<template>
    <div class="w-auto shadow m-3 p-0 rounded-3 card" style="max-width: 95%;">
        <NuxtLink class="profile-card d-flex p-0 mw-100 rounded-3" :to = "link" :style="cardWidth">
            <img :class="'img img-fluid ' + roundedClass" :src="images[pic_name]" alt="">
            <div :class="'card-content ' + roundedClass">
                <div class="all-text">
                    <p class="profile-name fs-4 fw-bold my-1">{{ title }}</p>
                    <p class="profile-username">{{ subtitle }}</p>
                </div>
                <div class="profile-icon text-end pe-4 mt-2">
                    <i class="fa fa-arrow-right-long fa-xl"></i>
                </div>
            </div>
        </NuxtLink>
        <div v-if="description" class="mw-100" :style="cardWidth">
            <NuxtLink :to = "link" class="text-decoration-none">
                <div class="px-2 pb-2 pt-1">{{ description }}</div>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
    //define props
    const props = defineProps(['pic_name', 'title', 'subtitle', 'link', 'width', 'description']);
    //get all images
    const images = getAllImages();
    //define cardWidth
    const cardWidth = "width: " + props.width;
    let roundedClass = "rounded-3";
    if (props.description)
        roundedClass = "rounded-top";
</script>

<style>
    .profile-card {
        background-color: var(--text-icons);
        position: relative;
        cursor: pointer;
    }

    .profile-name, .profile-username, .profile-icon{
        color: var(--text-icons);
    }
    
    .profile-card img {
        transition: all linear 0.25s;
    }

    .card:hover img {
        filter: grayscale(70%);
    }

    .all-text{
        position: inherit;
        top: 5%;
        width: 100%;
        padding: 0px 10px 10px 20px;
        transition: all linear 0.25s;
    }

    .card:hover .all-text {
        top: 10%;
    }

    .profile-icon{
        position: inherit;
        bottom: 10px;
        right: 5%;
        width: 100%;
        padding: 0px 10px 10px 10px;
        transition: all linear 0.25s;
    }

    .card:hover .profile-icon {
        right: 0%;
    }

    .card-content{
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.4);
    }

</style>