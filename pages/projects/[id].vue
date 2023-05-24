<template>
    
    <img class="introImage" :src="images[project.large_picture]" alt="project image">
    <div class="introName">
        <div class="container">
            <Breadcrumb :pathNames="pathNames" :pathLinks="pathLinks" />
            <h2>{{ project.name }}</h2>
        </div>
    </div>    

    <main class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="row">
                    <div class="col-md-2">
                        <img :src="images[project.picture]" id="projectIcon" alt="project icon">
                    </div>
                    <div class="col-md-10 d-flex align-items-center">
                        <h5>Designed by {{ project.startup_name }}</h5>
                    </div>
                </div>
                <div class="row">
                    <p v-html="project.overview"></p>
                </div>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-5">
                <div class="row" id="companyArea">
                    <h4 class="text-center">In our company</h4>
                    <div class="col-5" id="supImgContainer">
                        <img :src="images[project.people.picture]" class="rounded" id="projectSupervisor" :alt="project.people.name + ' image'">
                    </div>
                    <div class="col-7">
                        <div class="row">
                            <div class="col"><h5>Supervisor</h5></div>
                            <div class="col"><NuxtLink :to="'/team/' + project.people.id" class="pageLink">{{ project.people.name }}</NuxtLink></div>
                        </div>
                        <h5>Related areas</h5>
                        <div class="list-group">
                            <NuxtLink v-for="a of project.areas" :to="'/areas/' + a.id" class="list-group-item list-group-item-action">
                                {{ a.name }} 
                            </NuxtLink> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h3 class="projectTitle">What is the project about?</h3>
        <p v-html="project.description"></p>

        <h3 class="projectTitle">{{ project.startup_name }}</h3>
        <div class="row">
            <div class="col-md-4">
                <img :src="images[project.startup_picture]" class="rounded img-fluid" :alt="project.startup_name + ' group image'" >
            </div>
            <div class="col-md-8">
                <p v-html="project.startup_description"></p>
            </div>
        </div>
    </main>
</template>

<style>
    #projectIcon{
        width: 50px;
    }
    #projectSupervisor{
        width: 150px;
    }
    #supImgContainer{
        min-width: 150px;
    }
    #companyArea{
        border: 1px solid var(--divider-color);
        border-radius: 6px;
        padding: 10px;
        margin-top: 10px;
        margin-left: 5px;
        margin-right: 5px;
    }
    #companyArea h4{
        margin-bottom: 15px;
    }
    .projectTitle{
        margin-top: 30px;
        margin-bottom: 20px;
    }
</style>

<script setup>
    //import pinia store
    const stateStore = useStateStore();

    //get id
    const route = useRoute();
    const id = route.params.id;
    //get request from dataset
    const { data: project } = await useFetch('/api/projects/' + id);

    //get images
    const images = getAllImages();

    //set path for breadcrub
    const pathNames = ["Home",stateStore.lastProjectPage,project.value.name];
    const pathLinks = ["/",stateStore.lastProjectLink];
    
</script>
