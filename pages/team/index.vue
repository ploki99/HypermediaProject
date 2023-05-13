<template>
    <main class="container-fluid row">
        <Card v-for = "person of people" :title="person.name" :subtitle="person.role" 
                :link="'/team/' + person.id" :pic_name="person.picture" />
    </main>
</template>

<script setup>
    //get request from dataset
    const { data: people } = await useFetch('/api/team');

</script>
