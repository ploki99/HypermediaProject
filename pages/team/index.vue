<template>
    <Breadcrumb :pathNames="pathNames" :pathLinks="pathLinks" />
    <main>
        <div class="container">
            <h2>Our team</h2>
            <p class="mb-4">We are ready to discover and invest in the most innovative and 
                promising start-ups in the market, driving <b>innovation</b> and 
                <b>change</b> in society.
            </p>
        </div>
        <div class="row justify-content-center container-fluid">    
            <Card v-for = "person of people" :title="person.name" :subtitle="person.role" 
                :link="'/team/' + person.id" :pic_name="person.picture" :width="'300px'" />
        </div>
    </main>
</template>

<script setup>
    //import pinia store
    const stateStore = useStateStore();

    //get request from dataset
    const { data: people } = await useFetch('/api/team');
    //set path for breadcrub
    const pathNames = ["Home","Team"];
    const pathLinks = ["/"];
    //set last project pages visited
    stateStore.setDefaultLastProject();
    //set meta tag
    useSeoMeta({
        title: "Team - Bright Futures",
        description: "Are you looking for information about our team? Here we proudly showcase our talented group of professionals who work tirelessly to provide exceptional investment services and strategies."
    });
</script>