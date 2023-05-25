<!--
    Button to scroll to the top of the page
-->

<template>
    <button type="button" class="btn btn-floating" id="btn-back-to-top">
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

<script>
    export default{
        data() {
            return{
                topBotton: 0,
                //after how many pixels display the button
                displayPixels: 200
            }
        },
        methods: {
            backToTop() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            },
            handleScroll(){
                if (document.body.scrollTop > this.displayPixels 
                    || document.documentElement.scrollTop > this.displayPixels) 
                    this.topBotton.style.display = "block";
                else
                    this.topBotton.style.display = "none";
            }
        },
        beforeMount () {
            this.topBotton = document.getElementById("btn-back-to-top");
            window.addEventListener('scroll', this.handleScroll);
            this.topBotton.addEventListener('click', this.backToTop);
        },
        beforeDestroy () {
            window.removeEventListener('scroll', this.handleScroll);
            this.topBotton.removeEventListener('click', this.backToTop);
        }
    }
  

</script>