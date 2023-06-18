<!--
    Breadcrumb of the pages
-->

<template>
    <div :class="'container' + noMargin">
        <ul class="breadcrumb">
            <!-- Clickable part of the breadcrumb -->
            <li v-for="i of indexes" class="breadcrumb-item">
                <NuxtLink :to="pathLinks[i]" :class="linkClass" >{{pathNames[i]}}</NuxtLink>
            </li>    
            <!-- Current page (not clickable) -->
            <li class="breadcrumb-item active">{{ pathNames[pathNames.length-1] }}</li>       
        </ul>
    </div>
</template>

<script setup>
    const props = defineProps(['pathNames','pathLinks','light']);
    //indexes of pathLinks array
    const indexes = Array.from(props.pathLinks.keys());
    //set link css class
    let linkClass = "pageLink";
    let noMargin = ""
    if (props.light){
        linkClass = "lightPageLink";
        noMargin = "ms-0";
        props.pathNames[props.pathNames.length-1] = "";
    }
</script>

<style>
    .pageLink{
        color: var(--dark-primary-color);
    }
    .pageLink:hover, .lightPageLink:hover{
        color: var(--primary-color);
    }
    .lightPageLink{
        color: var(--light-primary-color);
    }
    .breadcrumb-item.active{
        color: var(--secondary-text);
    }
</style>