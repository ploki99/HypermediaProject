<template>
    <Breadcrumb :pathNames="pathNames" :pathLinks="pathLinks" />
    <main class="container">
        <h2>Most relevant projects</h2>
        <p>As a company, we take great pride in all of our work, but we understand that some projects stand 
            out above the rest. In this section you will find the list of <b>our top {{ projects.length }} projects</b> supervised.
            We are excited to share these projects with you and hope you find them as impressive as we do. 
            Take a look and discover how we have helped to shape the future of various industries!</p>
        <table class="table table-borderless">
            <thead>
                <tr class="text-center">
                    <th>Position</th>
                    <th>Project</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="i of projects.length">
                    <td class="align-middle text-center">{{ i }}</td>
                    <td>
                        <Project :name="projects[i-1].name" :link="'/projects/'+projects[i-1].id" :picture="projects[i-1].picture"  />
                    </td>
                </tr>
            </tbody>
        </table>
    </main>
</template>

<script setup>
    //import pinia store
    const stateStore = useStateStore();

    //get request from dataset
    const { data: projects } = await useFetch('/api/projects/most_relevant');

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