<!--
    Element of project list    
-->

<template>
    <div class="row projectItem align-items-center">
        <div class="col-md-1">
            <img :src="images[picture]" class="rounded" alt="related image">
        </div>
        <div class="col-md-9">{{ name }}</div>
        <div class="col-md-2">
            <NuxtLink :to = "link" class="btn btn-light">More info...</NuxtLink>
        </div>
    </div>
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
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .projectItem img{
        width: 50px;
        height: 50px;
    }
</style>