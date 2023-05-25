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

<script>
    export default{
        //always scroll to top of the page when the page changes
        scrollToTop: true
    }
</script>