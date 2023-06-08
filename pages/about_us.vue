<!--
    About us page
-->
<template>
    <Breadcrumb :pathNames="pathNames" :pathLinks="pathLinks" />
    <main>
        <section class="mb-3">
            <div class="container">
                <h2>Who are we?</h2>
                <p class="lead">Welcome to Bright Futures!</p>
                <div class="row">
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-sm-1 d-flex align-items-center justify-content-center mt-3 mb-3">
                                <i class="fa-solid fa-people-group fa-2xl"></i>
                            </div>
                            <div class="col-sm-11">
                                <p class="mt-2 mb-2 ms-2">
                                    We are a <strong>team</strong> of experienced investors with deep experience in technology, finance 
                                    and operations. We have a track record of successful investments in a wide range of companies, from 
                                    early-stage startups to established enterprises. 
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-1 d-flex align-items-center justify-content-center mt-3 mb-3">
                                <i class="fa-solid fa-bullseye fa-2xl"></i>
                            </div>
                            <div class="col-sm-11">
                                <p class="mt-2 mb-2 ms-2 me-2">
                                    Our <strong>mission</strong> is to find innovative startups and provide them with the resources and 
                                    support they need to succeed. We take a hands-on approach to investing, working closely with founders 
                                    to understand their vision and guide them through the ups and downs of building a startup.
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-1 d-flex align-items-center justify-content-center mt-3 mb-3">
                                <i class="fa-solid fa-briefcase fa-2xl"></i>
                            </div>
                            <div class="col-sm-11">
                                <p class="mt-2 mb-2 ms-2 me-2">
                                    Our company's <strong>work</strong> focuses on developing projects in {{ areas.length }} main areas: 
                                    <span v-for="idx of areas.length">
                                        <span>{{ areas[idx-1].name }}</span>
                                        <span v-if="idx===areas.length">.</span>
                                        <span v-else-if="idx===areas.length-1"> and </span>
                                        <span v-else>, </span>
                                    </span>
                                    Our team is committed to providing innovative 
                                    and sustainable solutions to address the challenges of our time. We work closely with our clients to ensure 
                                    that their needs are met while contributing to a more equitable and resilient society.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <Chart :id="'aboutChart'" :dimension="'350px'" />
                    </div>
                </div>
            </div>
        </section>
        
        <section id="quote" class="mt-5 mb-0 py-3">
            <div class="container">
                <h4 class="text-light text-center fst-italic">Investing in the future of technology and sustainability is not just 
                    a smart business decision, but a moral imperative in order to create a more sustainable and equitable world for 
                    future generations. 
                </h4>
                <div id="services"></div>
            </div>
        </section>

        <section class="bg-light py-5">
            <div class="container">
                <h2 class="mb-4">Our services</h2>
            </div>
            <VerticalPills :id="'servicesPills'" :titles="services.titles" :pics="services.pictures" :descriptions="services.descriptions"/>
        </section>

        <section class="py-5">
            <div class="container">
                <h2 class="mb-4">Our story</h2>
            </div>
            <Timeline :events="events" />
        </section>
       

    </main>
</template>

<style>
    
    .fa-bullseye, .fa-people-group, .fa-briefcase{
        color: var(--accent-color);
    }

    #quote {
        margin-bottom: 10px;
        background-color: var(--primary-text);
        opacity: 0.9;
        padding-top: 10px;
        padding-bottom: 10px;
    }

</style>

<script setup>
    //import pinia store
    const stateStore = useStateStore();
    //set path for breadcrub
    const pathNames = ["Home","About us"];
    const pathLinks = ["/"];
    //set last project pages visited
    stateStore.setDefaultLastProject();

    //get request from dataset
    const { data: areas } = await useFetch('/api/areas');

    //set text for timeline
    const events=[{date: '2010',
                    icon: 'fa-rocket',
                    title: 'Company Foundation',
                    description: 'Bright Futures was founded by a group of investors and entrepreneurs who shared a passion for supporting early stage companies. The team had experience in various industries and was committed to helping startups turn their ideas into successful businesses.'},
                    {date: '2011',
                    icon: 'fa-handshake fa-sm ps-1',
                    title: 'First investment',
                    description: 'The firm made its first investment in a technology startup focused on renewable energy. Over the next few years, Bright Futures continued to invest in companies that were using emerging technology to create positive social and environmental change.'},
                    {date: '2015',
                    icon: 'fa-arrow-trend-up fa-sm ps-1',
                    title: 'Portfolio growth',
                    description: 'Bright Futures had grown its portfolio to include startups in areas such as Healthtech and Circular economy and sustainability. The firm had also established partnerships with leading universities and organizations to provide resources to its portfolio companies.'},
                    {date: '2018',
                    icon: 'fa-piggy-bank',
                    title: 'New fund',
                    description: 'Bright Futures raised a new fund to support its growing portfolio. The firm continued to take a hands-on approach to investing, working closely with founders and providing mentorship and support throughout the early stages of company growth.'},
                    {date: '2023',
                    icon: 'fa-calendar',
                    title: 'Leading early stage investing',
                    description: 'Bright Futures is recognized as a leader in early stage investing, with a focus on supporting companies that are building a more sustainable and equitable future. The firm remains committed to its core values of innovation, sustainability, and social impact.'}];

    //set text for 'Our Services'
    const services = { titles: [ 'Startup Funding', 'Business Consulting', 'Mentorship'],
                       pictures: ['h_s1', 'h_s2', 'h_s3'],
                       descriptions: [
                            'Launching a new business can be daunting, but we provide resources to help young companies reach their full potential. Our goal is to enable entrepreneurs to achieve their business goals and turn their visions into reality. Through investments and partnerships, our team helps startups grow and succeed in a competitive market. With our support, startups can make a lasting impact in various industries.',
                            "Our business consulting services provide professional guidance and tactics to improve your company's financial effectiveness and success. Using our experience, we help companies achieve higher levels of productivity and profitability. Our consultations offer customized strategies that address the specific needs of your organization. Rely on our comprehensive service to achieve your business goals.",
                            'Our mentorship program offers the valuable opportunity to receive guidance and support from experienced professionals who can help you achieve your individual and professional aspirations. Our mentors are equipped with the experience and knowledge to assist you on your path to success.'
                    ]};

    //set meta tag
    useSeoMeta({
        title: "About us - Bright Futures",
        description: "Discover our passion for investing in innovative ideas and opportunities with our company. Get to know us better and start exploring the world-changing possibilities we bring to the table."
    });
</script>