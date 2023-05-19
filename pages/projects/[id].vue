<template>
    <Breadcrumb :pathNames="pathNames" :pathLinks="pathLinks" />
    <main class="container">
        <div>Supervisor: <NuxtLink :to="'/team/' + project.people.id" >{{ project.people.name }}</NuxtLink></div>
        
        <div>Related areas: 
            <span v-for="a of project.areas">
                <NuxtLink  :to="'/areas/' + a.id">{{ a.name }} </NuxtLink>
                &nbsp;
            </span>    
        </div>

        <div>Name: {{ project.name }}</div>

    </main>
</template>

<script setup>
    //import pinia store
    const stateStore = useStateStore();

    //get id
    const route = useRoute();
    const id = route.params.id;
    //get request from dataset
    const { data: project } = await useFetch('/api/projects/' + id);

    //get images
   // const images = getAllImages();

    //set path for breadcrub
    const pathNames = ["Home",stateStore.lastProjectPage,project.value.name];
    const pathLinks = ["/",stateStore.lastProjectLink];
    
</script>
