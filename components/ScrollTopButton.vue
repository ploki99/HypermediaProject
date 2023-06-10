<!--
    Button to scroll to the top of the page
-->

<template>
    <button type="button" class="btn btn-floating" id="btn-back-to-top" @click="backToTop">
        <i class="fas fa-arrow-up"></i>
    </button>
</template>

<style>
    #btn-back-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        border-radius: 20px;
        background-color: var(--accent-color);
        color: var(--text-icons);
        display: none; 
    }
    #btn-back-to-top:hover{
        background-color: var(--accent-color2);
    }
</style>

<script setup>
    //after how many pixels display the button
    const displayPixels = 200;
    //function to scroll to top the page
    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    //function to check if we have to display the button
    function handleScroll(){
        if (document.body.scrollTop > displayPixels || document.documentElement.scrollTop > displayPixels) 
            document.getElementById('btn-back-to-top').style.display = "block";
        else
            document.getElementById('btn-back-to-top').style.display = "none";
    }
    //wait the DOM to be created to add the event listener
    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    });
</script>