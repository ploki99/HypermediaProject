<!--
    Vertical pills component
-->

<template>
    <div class="container py-4">
        <div class="row">
            <div class="col-md-3">
                <!-- Tabs nav -->
                <div class="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <NuxtLink v-for="i of indexes" :class="'nav-link mb-3 p-3 shadow '+active[i] " :id="idTab[i]" data-bs-toggle="pill" 
                            :to="'#'+idCont[i]" role="tab" :aria-controls="idCont[i]" :aria-selected="ariaActive[i]">
                        <span class="small text-uppercase">{{ titles[i] }}</span>
                    </NuxtLink>
                </div>
            </div>

            <div class="col-md-9">
                <!-- Tabs content -->
                <div class="tab-content" id="v-pills-tabContent">
                    <div v-for="i of indexes" :class="'tab-pane fade shadow rounded bg-white p-5 '+show[i]" 
                            :id="idCont[i]" role="tabpanel" :aria-labelledby="idTab[i]">
                        <h4 class="mb-4">{{ titles[i] }}</h4>
                        <div class="row">
                            <div class="col-md-7">
                                <p class="text-description mb-3">{{ descriptions[i] }}</p>
                            </div>
                            <div class="col-md-5 text-center">
                                <img class="rounded img-fluid" :src="images[pics[i]]" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .nav-pills-custom .nav-link.active {
        background: var(--accent-color);
    }

    .nav-pills-custom .nav-link.active span {
        color: var(--text-icons);
    }
    
    .text-description{
        color: var(--secondary-text)
    }
</style>

<script setup>
    //define props
    const props = defineProps(['titles', 'pics', 'descriptions']);
    //get all images
    const images = getAllImages();
    //create ids
    let idTab = [];
    let idCont = [];
    let active = [];
    let show = [];
    let ariaActive = [];
    let indexes = [];
    for (let i = 0; i<props.titles.length; i++) {
        indexes.push(i);
        idTab.push('tab'+(i+1));
        idCont.push('cont'+(i+1));
        if (i===0) {
            active.push('active');
            show.push('show active');
            ariaActive.push('true');
        }
        else {
            active.push('');
            show.push('');
            ariaActive.push('false');
        }
    }
</script>