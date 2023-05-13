<!--
    Default layout used by all the page
-->
<template>
    <div class = 'page'>
        <div class = 'content'>
            <TheHeader />
            <br/>
            <slot />
            <br/>
        </div>
        <TheFooter />
    </div>
</template>
