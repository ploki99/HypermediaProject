<template>
    <main>
        {{test}}
    </main>
</template>

<script setup>
    const { data: test } = await useFetch(useRuntimeConfig().baseURL + '/server/test');
</script>