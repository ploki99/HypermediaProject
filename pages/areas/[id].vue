<template>

    <!--Intro image with title-->
    <IntroImage :title="area.name" :picture="area.picture + '_intro'" :pathNames="pathNames" :pathLinks="pathLinks"/>

    <main class="container">
        <div class="row">
            <p v-html="area.overview"></p>
        </div>

        <div class="row">
            <div class="col-md-7">
                <h3 class="mt-4 mb-3">Why choose us as your investor?</h3>
                <p v-html="area.description"></p>
            </div>
            <div class="col-md-5 text-center">
                <img :src="images[area.picture2]" alt="" class="img-fluid rounded my-4">
            </div>
        </div>

        <p v-html="area.description2"></p>

        <h3 class="pt-4">Take a look at our supervised projects</h3>
        <p>
            Explore our portfolio of {{ area.name.toLowerCase() }} projects and discover the innovative solutions we're investing in.
            <NuxtLink to="/projects/by_area">View the full list</NuxtLink> and dive into the details!
        </p>
   
        <NavigationLinks :prevLink="'/areas/'+prevId" :nextLink="'/areas/'+nextId" :currPage="currPage" :totPages="totPages"/>

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
    const images = getAllImages();

    //set path for breadcrub
    const pathNames = ["Home","Areas",area.value.name];
    const pathLinks = ["/","/areas"];
    //set last project pages visited
    stateStore.setLastProjectPage("Projects by area");
    stateStore.setLastProjectLink("/projects/by_area");
    stateStore.setLastArea(area.value.name);

    //set navigation links
    const {data: areas} = await useFetch('/api/areas');
    const ret = getPrevNextIds(areas.value,id);
    const prevId = ret[0];
    const nextId = ret[1];
    const currPage = ret[2] + 1;
    const totPages = ret[3];

    //set meta tag
    useSeoMeta({
        title: area.value.name + " - Bright Futures",
        description: "Find out why we invest in " + area.value.name + " and what amazing projects have been accomplished in this area."
    });
</script>
