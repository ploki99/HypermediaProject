<!--
    Default layout used by all the page
-->
<template>
    <!-- loading bar -->
    <NuxtLoadingIndicator :height="5" />
    <div class = 'page'>
        <div class = 'content'>
            <TheHeader /> 
            <slot />
        </div>
        <ScrollTopButton />
        <TheFooter />
    </div>
</template>

<style>
    .content{
        padding-top: 90px;
    }
    /*formatting main*/
    main{
        padding-top: 20px;
        padding-bottom: 50px;
    }
</style>