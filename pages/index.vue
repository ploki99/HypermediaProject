<!--
    Home page
-->
<template>
    <main class="container-fluid">
        home page
    </main>
</template>

<script setup>
    //import pinia store
    const stateStore = useStateStore();

    //set last project pages visited
    stateStore.setDefaultLastProject();
</script>