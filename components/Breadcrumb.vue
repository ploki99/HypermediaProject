<template>
    <div class="container-fluid">
        <ul class="breadcrumb">
            <!-- Clickable part of the breadcrumb -->
            <li v-for="i of indexes" class="breadcrumb-item">
                <NuxtLink :to="pathLinks[i]" class="pageLink" >{{pathNames[i]}}</NuxtLink>
            </li>    
            <!-- Current page (not clickable) -->
            <li class="breadcrumb-item active">{{ pathNames[pathNames.length-1] }}</li>       
        </ul>
    </div>
</template>

<script setup>
    const props = defineProps(['pathNames','pathLinks']);
    //indexes of pathLinks array
    const indexes = Array.from(props.pathLinks.keys());
</script>

<style>
    .pageLink{
        color: var(--primary-color);
    }
    .pageLink:hover{
        color: var(--dark-primary-color);
    }
    .breadcrumb-item.active{
        color: var(--secondary-text);
    }
</style>