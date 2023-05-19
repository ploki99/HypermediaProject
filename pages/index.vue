<!--
    Home page
-->
<template>
    <main class="container-fluid">
        home page

        <NuxtLink to="p">Test</NuxtLink>

    </main>
</template>

<script setup>
    //import pinia store
    const stateStore = useStateStore();

    //set last project pages visited
    stateStore.setDefaultLastProject();
</script>