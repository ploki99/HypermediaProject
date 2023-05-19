<template>
    <Breadcrumb :pathNames="pathNames" :pathLinks="pathLinks" />
    <main class="container">
        <label for="projectsName" class="form-label">Search bar for project name</label>
        &nbsp;
        <input type="text" id="projectsName" v-model="insertedName">
        <Project v-for="p of filteredProjects" :name="p.name" :link="'/projects/'+p.id" :picture="p.picture"  />
    </main>
</template>

<script setup>
    //import pinia store
    const stateStore = useStateStore();

    //get request from dataset
    const { data: projects } = await useFetch('/api/projects');
    
    //find project by name
    const insertedName = ref("");
    const filteredProjects = computed(() => {
        //if we don't insert anything, all projects are returned
        if ( insertedName.value == '' )
            return projects.value;
        const arr = [];
        // filtering the list of projects
        for(let p of projects.value) {
            if (p.name.toLowerCase().includes(insertedName.value.toLowerCase()))
                arr.push(p);
        }
        // returning the filtered list
        return arr;
    })

    //set path for breadcrub
    const pathNames = ["Home","All projects"];
    const pathLinks = ["/"];
    //set last project pages visited
    stateStore.setDefaultLastProject();
</script>