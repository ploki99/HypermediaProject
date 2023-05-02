<template>
    {{test}}
    <br/>
    <br/>
    <NuxtLink to="/">go to Home Page</NuxtLink>
</template>

<script setup>
    const { data: test } = await useFetch(useRuntimeConfig().baseURL + '/server/test');
</script>