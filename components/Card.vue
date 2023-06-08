<!--
    Card component
-->

<template>
    <NuxtLink class="profile-card shadow m-3 d-flex" :to = "link" :style="cardWidth">
        <img class="img img-fluid" :src="images[pic_name]" alt="">
        <div class="card-content">
            <div class="all-text">
                <h4 class="profile-name fw-bold my-1">{{ title }}</h4>
                <p class="profile-username">{{ subtitle }}</p>
            </div>
            <div class="profile-icon text-end pe-4 mt-2">
                    <i class="fa fa-arrow-right-long fa-xl"></i>
            </div>
        </div>
    </NuxtLink>
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
    .profile-card {
        background-color: var(--text-icons);
        max-width: 95%;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        border-radius: 10px;
        padding: 0;
    }

    .profile-name, .profile-username, .profile-icon{
        color: var(--text-icons);
    }
    
    .profile-card img {
        transition: all linear 0.25s;
    }

    .profile-card:hover img {
        filter: grayscale(70%);
    }

    .all-text{
        position: inherit;
        top: 20px;
        width: 100%;
        padding: 0px 10px 10px 20px;
        transition: all linear 0.25s;
    }

    .profile-card:hover .all-text {
        top: 35px;
    }

    .profile-icon{
        position: inherit;
        bottom: 10px;
        width: 100%;
        padding: 0px 10px 10px 10px;
        transition: all linear 0.25s;
    }

    .profile-card:hover .profile-icon {
        bottom: 25px;
    }

    .card-content{
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.4);
    }

</style>