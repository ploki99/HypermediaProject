<!--
    Title for pages with image right after the navbar
-->
<template>
    <img class="introImage" :src="images[picture]" :alt="title + ' image'">
    <div class="introName">
        <div class="container">
            <Breadcrumb :pathNames="pathNames" :pathLinks="pathLinks" />
            <h2>{{ title }}</h2>
        </div>
    </div> 
</template>

<script setup>
    //define props
    const props = defineProps(['title', 'picture', 'pathNames', 'pathLinks']);
    //get all images
    const images = getAllImages();
</script>

<style>
    .introImage{
        margin-top: -18px;
        min-width: 100%;
        max-width: 100%;
    }
    .introName{
        margin-bottom: 10px;
        background-color: var(--primary-text);
        opacity: 0.9;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .introName h2{
        color: var(--text-icons);
        font-weight: bold;
    }
    /*make breadcrumb more visible */
    .introName .breadcrumb-item.active{
        color: var(--text-icons);
    }
</style>