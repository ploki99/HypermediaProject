<!--
    Back and Forward links to navigate between person/area/project
-->

<template>
    <div id="navigationLinks">
        <NuxtLink :to="prevLink">
            <i class="fa-solid fa-angle-left fa-2xl"></i>
            <i class="fa-solid fa-minus fa-xl" id="prevLine"></i>
            <span>Prev</span>
        </NuxtLink>
        <NuxtLink :to="nextLink" id="nextLink">
            <span>Next</span>
            <i class="fa-solid fa-minus fa-xl" id="nextLine"></i>
            <i class="fa-solid fa-angle-right fa-2xl"></i>
        </NuxtLink>
    </div>
</template>

<script setup>
    //define props
    const props = defineProps(['prevLink', 'nextLink']);
</script>

<style>
    #navigationLinks{
        margin-top: 30px;
        width: 100%;
        position: relative;
    }
    #navigationLinks a, #navigationLinks a span {
        text-decoration: none;
        color: var(--primary-color);
    }
    #navigationLinks a:hover, #navigationLinks a span:hover {
        color: var(--dark-primary-color);
    }
    #nextLink{
        position: absolute;
        right: 10px;
    }
    #prevLine{
        margin-right: 10px;
        margin-left: -10px;
    }
    #nextLine{
        margin-right: -10px;
        margin-left: 10px;
    }
</style>