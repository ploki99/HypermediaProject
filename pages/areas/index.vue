<template>
    <Breadcrumb :pathNames="pathNames" :pathLinks="pathLinks" />
    <main class="container">
        <h2>Our areas of interest</h2>
        <p class="mb-5">In a world studded with endless possibilities, our areas of interest are the paths 
            that guide you toward the realization of your <b>dreams</b> and <b>goals</b>.</p>
        <div class="row justify-content-center">
            <Card v-for = "area of areas" :title="area.name"
                :link="'/areas/' + area.id" :pic_name="area.picture" :width="'400px'" />
        </div>
    </main>
</template>

<script setup>
    //import pinia store
    const stateStore = useStateStore();

    //get request from dataset
    const { data: areas } = await useFetch('/api/areas');

    //set path for breadcrub
    const pathNames = ["Home","Areas"];
    const pathLinks = ["/"];
    //set last project pages visited
    stateStore.setDefaultLastProject();

    //set meta tag
    useSeoMeta({
        title: "Areas - Bright Futures",
        description: "Learn about the exciting areas of interest of our cutting-edge venture capital firm. Explore the latest trends. Learn how our firm is leading the way in providing innovative solutions to the world's biggest challenges."
    });
</script>