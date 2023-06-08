<!--
    Element of project list    
-->

<template>
    
    <NuxtLink :to = "link" class="row projectItem align-items-center shadow">
        <div class="col-md-1 text-center">
            <img :src="images[picture]" alt="project icon">
        </div>
        <div class="col-md-9 ps-4 my-3">{{ name }}</div>
        <div class="col-md-2 text-end pe-5">
            <i  class="fa-solid fa-arrow-right-long fa-xl"></i>
        </div>
    </NuxtLink>

</template>

<script setup>
    const props = defineProps(['name','link','picture']);
    //get all images
    const images = getAllImages();

</script>

<style>
    
    .projectItem{
        min-height: 50px;
        max-width: 95%;
        margin: 10px;
        border-radius: 4px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: var(--text-icons);
        text-decoration: none;
        transition: all linear 0.25s;
    }
    .projectItem:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
    .projectItem img{
        width: 50px;
        height: 50px;
    }
    .projectItem div i{
        position: relative;
        color: var(--dark-primary-color);
        right: 10px;
        transition: all linear 0.25s;
    }
    .projectItem:hover div i{
        right: 0px;
    }
</style>