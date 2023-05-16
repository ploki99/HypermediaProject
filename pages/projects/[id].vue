<template>
    <Breadcrumb :pathNames="pathNames" :pathLinks="pathLinks" />
    <main class="container">
        {{ project }}
    </main>
</template>

<script setup>
    //get id
    const route = useRoute();
    const id = route.params.id;
    //get request from dataset
    const { data: project } = await useFetch('/api/projects/' + id);

    //get images
   // const images = getAllImages();

    //set path for breadcrub
    const pathNames = ["Home","All projects",project.value.name];
    const pathLinks = ["/","/projects"];
    
</script>
