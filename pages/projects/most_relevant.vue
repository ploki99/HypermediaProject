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
                <tr v-for="i of [0,1,2,3,4]">
                    <td class="align-middle text-center">{{ i+1 }}</td>
                    <td>
                        <Project :name="projects[i].name" :link="'/projects/'+projects[i].id" :picture="projects[i].picture"  />
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