<template>
    <Breadcrumb :pathNames="pathNames" :pathLinks="pathLinks" />
    <main class="container-fluid row">
        <h2>Our team</h2>
        <div id="startingText">We are ready to discover and invest in the most innovative and 
            promising start-ups in the market, driving <span class="fw-bold">innovation</span> and 
            <span class="fw-bold">change</span> in society.</div>
            
        <Card v-for = "person of people" :title="person.name" :subtitle="person.role" 
                :link="'/team/' + person.id" :pic_name="person.picture" :width="'300px'" />
    </main>
</template>

<script setup>
    //get request from dataset
    const { data: people } = await useFetch('/api/team');
    //set path for breadcrub
    const pathNames = ["Home","Team"];
    const pathLinks = ["/"];
</script>

<style>
    #startingText{
        margin-bottom: 20px;
    }
</style>