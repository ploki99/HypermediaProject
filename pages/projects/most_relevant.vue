<template>
    <Breadcrumb :pathNames="pathNames" :pathLinks="pathLinks" />
    <main class="container">
        <div class="row">
            <div class="col-md-8">
                <h2 class="mb-3">Most relevant projects</h2>
                <p>As a company, we take great pride in all of our work, but we understand that some projects stand 
                    out above the rest. In this section you will find the list of <b>our top {{ projects.length }} projects</b> supervised.
                    We are excited to share these projects with you and hope you find them as impressive as we do. 
                    Take a look and discover how we have helped to shape the future of various industries!
                </p>
            </div>
            <div class="col-md-4 text-center">
                <img src="~/assets/img/podium.png" class="img-fluid rounded" id="podium" alt="podium">
            </div>
        </div>
        <table class="table table-borderless mt-3">
            <tbody>
                <tr v-for="i of projects.length">
                    <td class="align-middle text-center"> 
                        <i class="fa-solid fa-medal fa-2xl" :style="'color:'+colors[i-1]"></i>
                    </td>
                    <td>
                        <ListItem :name="projects[i-1].name" :link="'/projects/'+projects[i-1].id" :picture="projects[i-1].picture" :small="false" alt="project icon" />
                    </td>
                </tr>
            </tbody>
        </table>
    </main>
</template>

<style>
    #podium{
        max-width: 200px;
    }
</style>

<script setup>
    //import pinia store
    const stateStore = useStateStore();

    //get request from dataset
    const { data: projects } = await useFetch('/api/projects/most_relevant');
    //set colors for the medals
    let colors = ['#ffd700','#c0c0c0','#cd7f32'];
    for (let i=3; i<projects.value.length; i++)
        colors.push('#42464d');

    //set path for breadcrub
    const pathNames = ["Home","Most relevant projects"];
    const pathLinks = ["/"];
    //set last project pages visited
    stateStore.setLastProjectPage("Most relevant projects");
    stateStore.setLastProjectLink("/projects/most_relevant");

    //set meta tag
    useSeoMeta({
        title: "Most relevant projects - Bright Futures",
        description: "Discover the " + projects.value.length + " best venture capital projects with expert supervision. Our page presents the most innovative and successful projects supported by our company."
    });
</script>