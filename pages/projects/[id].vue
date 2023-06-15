<template>
 
    <!--Intro image with title-->
    <IntroImage :title="project.name" :picture="project.large_picture" :pathNames="pathNames" :pathLinks="pathLinks"/>

    <main>
        
        <section class="container">
            <div class="row">
                <div class="col-md-6 pe-4">
                    <table class="w-100">
                        <tbody>
                            <tr>
                                <td class="text-center">
                                    <img :src="images[project.picture]" id="projectIcon" alt="project icon">
                                </td>
                                <td class="align-middle">
                                    <h3 class="mb-0 ms-3">Designed by {{ project.startup_name }}</h3>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="row mt-3">
                        <p v-html="project.overview"></p>
                    </div>
                </div>

                <div class="col-md-6">
                    <div id="ourCompany">
                        <h3>In our company</h3>
                        <p class="mb-1">
                            Take a look at our team member overseeing this project and the areas to which this project belongs.
                        </p>
                        <div class="row justify-content-center">
                            <div class="col-5" id="cardContainer">
                                <Card :pic_name="project.people.picture" :title="project.people.name" subtitle="Supervisor" 
                                    :link="'/team/' + project.people.id" width="170px"/>
                            </div>
                            <div class="col-7" id="relatedAreas"> 
                                <h4 class="mt-3">Areas of interest</h4>
                                <div class="list-group">
                                    <ListItem v-for="a of project.areas" :link="'/areas/' + a.id" :name="a.name" :small="true" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-light py-2 mt-4">
            <div class="container">
                <h3 class="mt-4 mb-3">What is the project about?</h3>
                <p v-html="project.description"></p>
            </div>
        </section>

        <section class="container">
            <h3 class="mt-4 mb-3">{{ project.startup_name }}</h3>
            <div class="row">
                <div class="col-md-4 mb-3">
                    <img :src="images[project.startup_picture]" class="rounded img-fluid" :alt="project.startup_name + ' team'" >
                </div>
                <div class="col-md-8">
                    <p v-html="project.startup_description"></p>
                    <div v-if="project.startup_link && project.startup_link!=''" class="text-center">
                        <NuxtLink class="btn btn-primary" target="blank" :to="project.startup_link">Visit website</NuxtLink>
                    </div>
                </div>
            </div>
        </section>

        <NavigationLinks :prevLink="'/projects/'+prevId" :nextLink="'/projects/'+nextId" :currPage="currPage" :totPages="totPages"/>
    
    </main>
</template>

<style>
    #projectIcon{
        width: 50px;
    }
    #cardContainer{
        max-width: 200px;
        padding: 0;
    }
    #ourCompany{
        border-left: 1px solid var(--divider-color);
        padding-left: 1.5rem;
    }
    /*improve responsiveness*/
    @media screen and (max-width: 768px) {
        #ourCompany{
            padding-top: 1rem;
            padding-left: 0;
            border-left: none;
            border-top: 1px solid var(--divider-color);
        }
    }
    @media screen and (max-width: 992px) {
        #relatedAreas {
            width: 100%;
        }
        #cardContainer {
            width: auto;
        }
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
    let lpp = stateStore.lastProjectPage;
    if (stateStore.lastProjectLink === "/projects/by_area")
        lpp += ": " + stateStore.lastArea;
    const pathNames = ["Home",lpp,project.value.name];
    const pathLinks = ["/",stateStore.lastProjectLink];

    //set navigation links
    const {data: projects} = await useFetch('/api/projects');
    let ret;
    if (stateStore.lastProjectLink === "/projects"){
        ret = getPrevNextIds(projects.value,id);
    }
    else if (stateStore.lastProjectLink === "/projects/most_relevant"){
        const {data: relevantProjets} = await useFetch('/api/projects/most_relevant');
        ret = getPrevNextIds(relevantProjets.value,id);
    }
    else if (stateStore.lastProjectLink === "/projects/by_area"){
        //lamda expression to check if a project is in a certain area
        const condition = (obj) => {
            for ( let a of obj.areas)
                if (a.name === stateStore.lastArea)
                    return true;
            return false;
        }
        ret = getPrevNextIds(projects.value,id,condition);
    }
    const prevId = ret[0];
    const nextId = ret[1];
    const currPage = ret[2] + 1;
    const totPages = ret[3];

    //set meta tag
    useSeoMeta({
        title: project.value.name + " - Bright Futures",
        description: "Discover the beautiful project '" + project.value.name + "' designed by " + project.value.startup_name + " that our company helped to grow thanks to the supervision of " + project.value.people.name + "."
    });
    
</script>
