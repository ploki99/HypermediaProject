<template>
    <div class="container-fluid">
        <!-- Clickable part of the breadcrumb -->
        <span v-for="i of indexes">
            <NuxtLink :to="pathLinks[i]" class="link-primary">{{pathNames[i]}}</NuxtLink>
            &nbsp>&nbsp 
        </span>    
        <!-- Current page (not clickable) -->
        <span class="text-secondary">{{ pathNames[pathNames.length-1] }}</span>       
    </div>
</template>

<script setup>
    const props = defineProps(['pathNames','pathLinks']);
    //indexes of pathLinks array
    const indexes = Array.from(props.pathLinks.keys());
</script>

<style>
    .link-primary{
        text-decoration: none;
    }
</style>