<!--
    Default layout used by all the page
-->
<template>
    <!-- loading bar -->
    <NuxtLoadingIndicator />
    <div class = 'page'>
        <div class = 'content'>
            <TheHeader /> 
            <slot />
        </div>
        <TheFooter />
    </div>
</template>
