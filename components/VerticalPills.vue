<!--
    Vertical pills component
-->

<template>
    <div class="container py-4" :id="id">
        <div class="row">
            <div class="col-md-3">
                <!-- Tabs nav -->
                <div class="nav flex-column nav-pills nav-pills-custom" role="tablist" aria-orientation="vertical">
                    <NuxtLink v-for="i of indexes" :class="'nav-link mb-3 p-3 shadow '+active[i] " :id="idTab[i]" data-bs-toggle="pill" 
                            :to="'#'+idCont[i]" role="tab" :aria-controls="idCont[i]" :aria-selected="ariaActive[i]" @click="updateLastIndex(i)">
                        <span class="small text-uppercase">{{ titles[i] }}</span>
                    </NuxtLink>
                </div>
            </div>

            <div class="col-md-9">
                <!-- Tabs content -->
                <div class="tab-content">
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
    
    .nav-pills-custom .nav-link:hover {
        background: var(--accent-color);
    }

    .nav-pills-custom .nav-link:hover span {
        color: var(--text-icons);
    }

    .nav-pills-custom .nav-link{
        transition: none;
    }

    .text-description{
        color: var(--secondary-text)
    }
</style>

<script setup>
    //define props
    const props = defineProps(['id','titles', 'pics', 'descriptions']);
    //get pills store
    const pillsStore = usePillsStore();
    function updateLastIndex(idx){
        pillsStore.setLastIndex(props.id,idx);
    }
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
        idTab.push(props.id + '_tab'+(i+1));
        idCont.push(props.id + '_cont'+(i+1));
        if (i === pillsStore.getLastIndex(props.id) ) {
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