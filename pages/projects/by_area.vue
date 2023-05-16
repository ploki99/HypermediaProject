<template>
    <Breadcrumb :pathNames="pathNames" :pathLinks="pathLinks" />
    <main class="container">
        <select class="form-select" v-model="selectedArea">
            <option disabled value="">Select one area</option>
            <option v-for="a of areas">{{ a.name }}</option>
        </select> 
        <Project v-for="p of filteredProjects" :name="p.name" :link="'/projects/'+p.id" :picture="p.picture"  />
    </main>

</template>

<script setup>

    const defaultIdArea = 0; //TODO: use pinia

    //get areas from dataset
    const { data: areas } = await useFetch('/api/areas');
    //get projects from dataset
    const { data: projects } = await useFetch('/api/projects');
    
    //get the projects in the selected area
    const selectedArea = ref(areas.value[defaultIdArea].name);
    const filteredProjects = computed(() => {
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
</script>