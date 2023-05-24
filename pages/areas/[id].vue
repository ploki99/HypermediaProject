<template>

    <!-- TODO: create a component -->
    <img class="introImage" :src="images[area.picture]" alt="area image">
    <div class="introName">
        <div class="container">
            <Breadcrumb :pathNames="pathNames" :pathLinks="pathLinks" />
            <h2>{{ area.name }}</h2>
        </div>
    </div> 


    <main class="container">
        <div class="row">
            <p v-html="area.overview"></p>
        </div>

        <div class="row">
            <h3>Our supervised projects</h3>
            <Project v-for="p of area.projects" :name="p.name" :link="'/projects/'+p.id" :picture="p.picture" />
        </div>

        <div class="row">
            <div class="col-md-7">
                <h3 id="secondTitle">Why invest in {{ area.name.toLowerCase() }}?</h3>
                <p v-html="area.description"></p>
            </div>
            <div class="col-md-5 text-center">
                <img id="secondImage" :src="images[area.picture2]" alt="area image" class="img-fluid rounded">
            </div>
        </div>

        <p v-html="area.description2"></p>


    </main>
</template>

<style>
    #secondTitle{
        margin-top: 20px;
        margin-bottom: 10px;
    }
    #secondImage{
        margin-top: 30px;
        margin-bottom: 30px;
    }

</style>

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
    stateStore.setDefaultLastProject();
    
</script>
