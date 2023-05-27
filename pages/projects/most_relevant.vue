<template>
    <Breadcrumb :pathNames="pathNames" :pathLinks="pathLinks" />
    <main class="container">
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
</script>