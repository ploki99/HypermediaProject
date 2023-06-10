<template>
    <Breadcrumb :pathNames="pathNames" :pathLinks="pathLinks" />
    <main class="container">
        <div class="row">
            <div class="col-md-6 d-flex align-content-around flex-wrap">
                <div>
                    <h2>Projects by area</h2>
                    <p class="lead">Check out our projects categorized by areas of interest.</p>
                    <p>
                        Use the drop-down menu provided to choose the appropriate list of projects relevant to our specific 
                        areas of interest. Feel free to browse and select projects that match your interests.
                    </p>
                </div>
                <div class="input-group rounded justify-content-center mt-4 mb-4">
                    <select class="form-select" v-model="selectedArea" id="selectInput">
                        <option disabled value="">Select one area</option>
                        <option v-for="a of areas">{{ a.name }}</option>
                    </select> 
                </div>
            </div>
            <div class="col-md-6 text-center">
                <img class="w-75 rounded shadow" :src="images[getAreaByName(selectedArea).picture]" :alt="selectedArea">
                <div class="d-flex justify-content-center">
                    <ListItem class="w-75" :name="'Go to '+selectedArea" :link="'/areas/'+getAreaByName(selectedArea).id" 
                    :small="true" alt="" />
                </div>
            </div>
        </div>
        <h4 class="pt-4 pb-2">List of projects</h4>
        <ListItem v-for="p of filteredProjects" :name="p.name" :link="'/projects/'+p.id" :picture="p.picture" :small="false" alt="project icon" />
    </main>

</template>

<style>
    #selectInput{
        max-width: 500px;
    }
</style>

<script setup>
    //import pinia store
    const stateStore = useStateStore();

    //get areas from dataset
    const { data: areas } = await useFetch('/api/areas');
    //get projects from dataset
    const { data: projects } = await useFetch('/api/projects');
    //get all images
    const images = getAllImages();
    
    //utility function
    function getAreaByName(name){
        for (let a of areas.value){
            if ( a.name === name)
                return a;
        }
    }

    //set default area    
    const defaultArea = stateStore.lastArea == '' ? areas.value[0].name : stateStore.lastArea;
    //get the projects in the selected area
    const selectedArea = ref(defaultArea);
    const filteredProjects = computed(() => {
        //change selected area in Pinia store
        stateStore.setLastArea(selectedArea.value);
        const arr = [];
        // filtering the list of projects
        for(let p of projects.value) {
            for (let a of p.areas){
                if (a.name == selectedArea.value)
                    arr.push(p);
            }
        }
        // returning the filtered list
        return arr;
    })

    //set path for breadcrub
    const pathNames = ["Home","Projects by area"];
    const pathLinks = ["/"];
    //set last project pages visited
    stateStore.setLastProjectPage("Projects by area");
    stateStore.setLastProjectLink("/projects/by_area");

    //set meta tag
    useSeoMeta({
        title: "Projects by area - Bright Futures",
        description: "Explore our wide range of supervised projects by area of interest. A comprehensive guide to Bright Futures venture capital, discover unique investment opportunities today!"
    });
</script>