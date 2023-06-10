<template>
    <Breadcrumb :pathNames="pathNames" :pathLinks="pathLinks" />
    <main class="container">
        <div class="row">
            <div class="col-md-5" id="img_div">
                <img :src="images[person.picture]" class="rounded img-fluid" :alt="person.name" > 
            </div>
            <div class="col-md-7 ml-5">
                <h4>{{ person.name }}</h4>
                <div class="fw-bold" id="person_role">{{ person.role }}</div>
                <div class="pt-2">{{ person.cv }}</div>
            </div>
        </div>
        <div class="row mt-4">
            <h3>Supervised projects</h3>
            <ListItem v-for="p of person.projects" :name="p.name" :link="'/projects/'+p.id" :picture="p.picture" :small="false" alt="project icon" />
        </div>
        <NavigationLinks :prevLink="'/team/'+prevId" :nextLink="'/team/'+nextId" :currPage="currPage" :totPages="totPages"/>
    </main>
</template>

<script setup>
    //import pinia store
    const stateStore = useStateStore();

    //get id
    const route = useRoute();
    const id = route.params.id;
    //get request from dataset
    const { data: person } = await useFetch('/api/team/' + id);

    //get images
    const images = getAllImages();

    //set path for breadcrub
    const pathNames = ["Home","Team",person.value.name];
    const pathLinks = ["/","/team"];

    //set last project pages visited
    stateStore.setDefaultLastProject();
    
    //set navigation links
    const {data: people} = await useFetch('/api/team');
    const ret = getPrevNextIds(people.value,id);
    const prevId = ret[0];
    const nextId = ret[1];
    const currPage = ret[2] + 1;
    const totPages = ret[3];

    //set meta tag
    useSeoMeta({
        title: person.value.name + " - Bright Futures",
        description: "Check out the incredible resume and the supervised projects of " + person.value.name + ", who currently works as an " + person.value.role + " in our company."
    });
</script>

<style>
    #img_div img{
        width: 300px;
    }
    #person_role{
        color: var(--secondary-text);
    }
</style>