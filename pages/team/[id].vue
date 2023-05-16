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
                <div class="text-secondary fw-bold">{{ person.role }}</div>
                <div id="person_cv">{{ person.cv }}</div>
            </div>
        </div>
        <div class="row" id="supervisedProjects">
            <h3>Supervised projects</h3>
            <ul class="list-group">
                <li v-for = "p of person.projects" class="list-group-item">{{ p.name }}</li>
            </ul> 
            <div v-if="person.projects.length == 0" class="text-secondary fst-italic">
                {{ person.name}} is not currently supervising any projects.
            </div>

        </div>
    </main>
</template>

<script setup>
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
</style>