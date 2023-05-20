<template>
    <Breadcrumb :pathNames="pathNames" :pathLinks="pathLinks" />
    <main class="container">
        <div class="row">
            <div class="col-sm-4" id="img_div">
                <img :src="images[person.picture]" class="rounded" :alt="person.name + ' image'" > 
            </div>
            <div class="col-sm-1"></div>
            <div class="col-sm-7">
                <h4>{{ person.name }}</h4>
                <div class="fw-bold" id="person_role">{{ person.role }}</div>
                <div id="person_cv">{{ person.cv }}</div>
            </div>
        </div>
        <div class="row" id="supervisedProjects">
            <h3>Supervised projects</h3>
            <Project v-for="p of person.projects" :name="p.name" :link="'/projects/'+p.id" :picture="p.picture" />
        </div>
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
    
</script>

<style>
    #img_div,img{
        width: 300px;
    }
    #person_cv{
        padding-top: 10px;
    }
    #supervisedProjects{
        margin-top: 20px;
    }
    #supervisedProjects ul{
        margin-top: 10px;
    }
    #person_role{
        color: var(--secondary-text);
    }
</style>