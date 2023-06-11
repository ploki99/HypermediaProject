<!--
    Back and Forward links to navigate between person/area/project
-->

<template>
    <div id="navigationLinks" class="row">
        <div class="col-6 position-relative">
            <NuxtLink :to="prevLink" id="prevLink">
                <i class="fa-solid fa-angle-left fa-2xl"></i>
                <i class="fa-solid fa-minus fa-xl" id="prevLine"></i>
                Prev
            </NuxtLink>
            <span class="position-absolute pageIndicator" id="currPage">{{ currPage }}</span>
            <span class="position-absolute pageIndicator" id="divPage">/</span>
        </div>
        <div class="col-6 position-relative">
            <span class="position-absolute pageIndicator" id="totPage">{{ totPages }}</span>
            <NuxtLink :to="nextLink" id="nextLink">
                Next
                <i class="fa-solid fa-minus fa-xl" id="nextLine"></i>
                <i class="fa-solid fa-angle-right fa-2xl"></i>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
    //define props
    const props = defineProps(['prevLink', 'nextLink','currPage','totPages']);
</script>

<style>
    #navigationLinks{
        margin-top: 70px;
        width: 100%;
    }
    #navigationLinks a {
        text-decoration: none;
        color: var(--dark-primary-color);
    }
    #navigationLinks a:hover {
        color: var(--primary-color);
    }
    #prevLink{
        position: absolute;
        right: 15%; 
    }
    #nextLink{
        position: relative;
        left: 15%; 
    }
    #prevLine{
        margin-right: 10px;
        margin-left: -10px;
    }
    #nextLine{
        margin-right: -10px;
        margin-left: 10px;
    }
    /*style current page / total pages */
    #currPage{
        right: 0;
        padding-right: 2%;
    }
    #divPage{
        right: -0.2rem;
    }
    #totPage{
        left: 0;
        padding-left: 2%;
    }
    .pageIndicator{
        color: var(--secondary-text);
    }

</style>