<template>
    <Breadcrumb :pathNames="pathNames" :pathLinks="pathLinks" />
    <main class="container">
        {{ area }}
    </main>
</template>

<script setup>
    //import pinia store
    const stateStore = useStateStore();

    //get id
    const route = useRoute();
    const id = route.params.id;
    //get request from dataset
    const { data: area } = await useFetch('/api/areas/' + id);

    //get images
   // const images = getAllImages();

    //set path for breadcrub
    const pathNames = ["Home","Areas",area.value.name];
    const pathLinks = ["/","/areas"];
    //set last project pages visited
    stateStore.setDefaultLastProject();
    
</script>
