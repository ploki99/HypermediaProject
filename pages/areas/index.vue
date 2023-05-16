<template>
    <Breadcrumb :pathNames="pathNames" :pathLinks="pathLinks" />
    <main class="container-fluid row">
        <Card v-for = "area of areas" :title="area.name" :subtitle="''" 
                :link="'/areas/' + area.id" :pic_name="area.picture" :width="'400px'" />
    </main>
</template>

<script setup>
    //get request from dataset
    const { data: areas } = await useFetch('/api/areas');

    //set path for breadcrub
    const pathNames = ["Home","Areas"];
    const pathLinks = ["/"];
</script>