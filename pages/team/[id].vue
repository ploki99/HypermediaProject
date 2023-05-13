<template>
    <main class="container">
        <div class="row">
            <div class="col-sm-4">
                <img :src="images[dynamic_image_name]" class="rounded" :alt="person.name + ' image'" > 
            </div>
            <div class="col-sm-8">
                <h4>{{ person.name }}</h4>
                <div class="text-secondary fw-bold">{{ person.role }}</div>
                <br/>
                <div>{{ person.cv }}</div>
            </div>
        </div>
        <div class="row">
            <!-- PROJECTS SUPERVISED (TODO) -->
        </div>
    </main>
</template>

<script setup>
    //get id
    const route = useRoute();
    const id = route.params.id;
    //get request from dataset
    const { data: person } = await useFetch('/api/team/' + id);

    //get images
    const images = getAllImages();
    //set right image
    const dynamic_image_name = person.value.picture;
    
</script>

<style>
    img{
        width: 300px;
    }
</style>