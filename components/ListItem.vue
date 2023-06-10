<!--
    Element of a linked list    
-->

<template>
    
    <NuxtLink :to = "link" class="row listItem align-items-center shadow" :style="style">
        <div class="col-md-1 text-center" v-if="picture">
            <img :src="images[picture]" :alt="alt">
        </div>
        <div v-if="small" class="col-md-9 ps-3 my-0 py-0">{{ name }}</div>
        <div v-else class="col-md-8 ps-4 my-3 py-2">{{ name }}</div>
        <div class="col-md-3 text-end">
            <i  class="fa-solid fa-arrow-right-long fa-xl"></i>
        </div>
    </NuxtLink>

</template>

<script setup>
    const props = defineProps(['name','link','picture','small','alt']);
    //get all images
    const images = getAllImages();
    //set margin and padding
    const width = props.small ? 5 : 10;
    const style = 'margin: ' + width + 'px; padding-top:' + width + 'px; padding-bottom:' + width + 'px;';
</script>

<style>
    
    .listItem{
        min-height: 50px;
        max-width: 95%;
        border-radius: 4px;
        background-color: var(--text-icons);
        text-decoration: none;
        transition: all linear 0.25s;
    }
    .listItem:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
    .listItem img{
        width: 50px;
        height: 50px;
    }
    .listItem div i{
        position: relative;
        color: var(--dark-primary-color);
        right: 20px;
        transition: all linear 0.25s;
    }
    .listItem:hover div i{
        right: 10px;
    }
</style>