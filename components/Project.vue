<template>
    <div class="row projectItem align-items-center">
        <div class="col-sm-1">
            <img :src="images[picture]" class="rounded" alt="related image">
        </div>
        <div class="col-sm-9">{{ name }}</div>
        <div class="col-sm-2">
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
        margin: 10px;
        border: 1px solid #6c757d;
        border-radius: 4px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .projectItem img{
        width: 50px;
        height: 50px;
    }
</style>