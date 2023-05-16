<template>
    <Breadcrumb :pathNames="pathNames" :pathLinks="pathLinks" />
    <main class="container-fluid">
        {{ projects }}
    </main>
</template>

<script setup>
    //get request from dataset
    const { data: projects } = await useFetch('/api/projects');

    //set path for breadcrub
    const pathNames = ["Home","All projects"];
    const pathLinks = ["/"];
</script>