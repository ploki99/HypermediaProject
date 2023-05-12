<template>
    <main>
        The first person in the dataset is: {{test}}
    </main>
</template>

<script setup>

    const { data: test } = await useFetch('/api/people/')
</script>