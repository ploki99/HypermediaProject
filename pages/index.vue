<!--
    Home page
-->
<template>

  <img class="introImage" src="~/assets/img/h_first.jpg">

  <section id="hero" class="text-center">
      <div class="container-fluid">
          <h1 class="display-3 fw-bold">Welcome to Bright Futures</h1>
          <p class="lead display-6">We invest in innovative startups and help them grow.</p>
      </div>
  </section>

    <section id="about" class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies tellus nec felis sagittis, vitae
                    rutrum elit vulputate.</p>
                </div>
                <div class="col-lg-6">
                    <img src="" alt="About Us" class="img-fluid">
                </div>
            </div>
        </div>
    </section>

    <section id="services" class="bg-light py-5">
        <div class="container">
            <h2 class="mb-4">Our Services</h2>
            <div class="row">
                <div v-for="s of services" class="col-md-4" >
                    <Card :title="s.name" :subtitle="s.description" :link="''" :pic_name="s.picure" :width="'300px'" />
                </div>
            </div>    
        </div>
    </section>

    <section id="portfolio" class="py-5">
        <div class="container">
            <h2>Our Portfolio</h2>
            <p class="lead">We successfully supervise several projects, here is a selection of the most relevant ones.</p>
            <Carousel :id="'homeCarousel'" :indexes="indexes" :carouselData="carouselData" />
        </div>
    </section>


    <section id="contact" class="bg-light py-5 pb-5">
        <div class="container">
            <h2>Contact Us</h2>
            <p class="lead">Join us on our journey and let's create something extraordinary together.</p>
            <div class="text-center">
                <NuxtLink class="btn btn-primary btn-lg" to="/contact">Contact Us</NuxtLink>
            </div>
        </div>
    </section>

</template>


<style>
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

    //set data for carousel

    //get request from dataset
    const { data: projects } = await useFetch('/api/projects/most_relevant');
    let carouselData = [];
    let indexes = [];
    for (let i = 0 ; i < projects.value.length ; i++ ){
        let a={};
        a['name'] = projects.value[i].name;
        a['link'] = '/projects/' + projects.value[i].id;
        a['picture'] = projects.value[i].large_picture;
        a['picture'] = 'a1_intro';
        carouselData.push(a);
        indexes.push(i);
    }

    //set last project pages visited
    stateStore.setLastProjectPage("Most relevant projects");
    stateStore.setLastProjectLink("/projects/most_relevant");
</script>