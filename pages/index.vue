<!--
    Home page
-->
<template>

    <img id="homeImage" src="~/assets/img/h_first.jpg" alt="">

    <section id="hero" class="text-center">
        <div class="container-fluid">
            <h1 class="display-3 fw-bold">Welcome to Bright Futures</h1>
            <p class="lead display-6">We invest in innovative startups and help them grow</p>
        </div>
    </section>

    <section id="about" class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h2 class="mb-4">About Us</h2>
                    <p>We are Bright Futures, an experienced team of investors with expertise in technology, finance and operations. 
                        We invest in innovative startups and provide support to guide them to success. Our company specializes in  
                        <span v-for="idx of areas.length">
                            <span>{{ areas[idx-1].name }}</span>
                            <span v-if="idx===areas.length">.</span>
                            <span v-else-if="idx===areas.length-1"> and </span>
                            <span v-else>, </span>
                        </span>
                        We currently have several ongoing projects, each of which is related to one or more of our areas of interest.
                    </p>
                    <p>
                        Founded in 2010, our portfolio includes companies that create social and environmental change. We have 
                        established partnerships with universities and raised new funds in 2018. Today, we are a leader in early 
                        stage investing, committed to innovation, sustainability, and social impact.
                    </p>
                    <div class="text-center mt-4">
                        <NuxtLink class="btn btn-primary btn-lg" to="/about_us">Discover more</NuxtLink>
                    </div>
                </div>
                <div class="col-lg-6 mt-4">
                    <Chart :id="'homeChart'" :dimension="'350px'" />
                </div>
            </div>
        </div>
    </section>
    
    <section id="portfolio" class="bg-light py-5">
        <div class="container">
            <h2>Our Portfolio</h2>
            <p class="lead">We successfully supervise several projects, here is a selection of the most relevant ones.</p>
            <Carousel :id="'homeCarousel'" :names="names" :pictures="pictures" :links="links"/>
        </div>
    </section>

    <section id="services" class="py-5">
        <div class="container">
            <h2>Our Services</h2>
            <p class="lead mb-4">Discover the services we offer. Click below to learn more!</p>
            <div class="row justify-content-evenly">
                <Card v-for="i of services.length" :title="services[i-1].name" :link="'/about_us#services'" 
                    :pic_name="services[i-1].picure" :width="'270px'" :description="services[i-1].description" @click="updateServicesClicked(i-1)"/>
            </div>    
        </div>
    </section>

    <section id="contact" class="bg-light py-5 pb-5">
        <div class="container">
            <h2>Let's create something extraordinary together</h2>
            <p class="lead">We are always looking for new partners who share our vision for a better future. Join us on our journey!</p>
            <div class="text-center">
                <NuxtLink class="btn btn-primary btn-lg" to="/contact">Contact Us</NuxtLink>
            </div>
        </div>
    </section>

</template>


<style>
    #homeImage{
        margin-top: -18px;
        min-width: 100%;
        max-width: 100%;
    }
    #hero{
        position: relative;
        width: 100%;
        background: rgba(178, 223, 219, 0.7);    
        padding-top: 30px;
        height: 200px;
        top: -200px;
        margin-bottom: -200px;
    }
    @media screen and (max-width: 770px) {
        #hero {
            top: 0px;
            margin-bottom: 0px;
            height: 250px;
        }
    }

</style>



<script setup>
    //import pinia store
    const stateStore = useStateStore();

    //set text for 'Our Services'
    const services=[{name: 'Startup Funding',
                     picure: 'h_s1',
                     description: 'We offer financial support to early-stage startups, helping them achieve their business objectives and turn their visions into reality.'},
                    {name: 'Business Consulting',
                     picure: 'h_s2',
                     description: "Our business consulting service offers expert advice and strategy to improve your company's productivity and profitability."},
                    {name: 'Mentorship',
                     picure: 'h_s3',
                     description: 'We provide guidance and support from experienced professionals to help you achieve your personal and career goals.'}];

    //get pills store and define function to update services clicked
    const pillsStore = usePillsStore();
    function updateServicesClicked(idx){
        pillsStore.setLastIndex('servicesPills',idx);
    }

    //set data for carousel

    //get request from dataset
    const { data: areas } = await useFetch('/api/areas');
    const { data: projects } = await useFetch('/api/projects/most_relevant');
    const names = [];
    const pictures = [];
    const links = [];
    for (let p of projects.value){
        names.push(p.name);
        links.push('/projects/' + p.id);
        pictures.push(p.large_picture);
    }

    //set last project pages visited
    stateStore.setLastProjectPage("Most relevant projects");
    stateStore.setLastProjectLink("/projects/most_relevant");

    //set meta tag
    useSeoMeta({
        title: "Bright Futures",
        description: "Welcome to Bright Futures, we are experienced investors and entrepreneurs helping early stage startups succeed through funding, mentorship, and industry expertise."
    });
</script>