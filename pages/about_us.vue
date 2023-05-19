<!--
    About us page
-->
<template>
    <Breadcrumb :pathNames="pathNames" :pathLinks="pathLinks" />
    <main class="container-fluid">
        <h2>Who are we?</h2>
        <h5>Welcome to our venture capital firm!</h5> 
        <div id="startingText">
        We are a team of experienced investors and entrepreneurs dedicated to helping early stage companies 
        take their ideas to the next level.
        Our mission is to find innovative and disruptive startups and provide them with the resources and 
        support they need to succeed. Whether it's seed funding, mentorship, or access to our network of 
        industry experts, we are here to help entrepreneurs make their dreams a reality.
        At our firm, we believe that the best way to create value for our investors is by helping our portfolio 
        companies succeed. We take a hands-on approach to investing, working closely with founders to understand
        their vision and guide them through the ups and downs of building a startup.
        Our team brings deep expertise in technology, finance, and operations to support businesses at every 
        stage of growth. We have a track record of successful investments in a wide range of companies, from 
        early-stage startups to established enterprises.
        At our core, we believe that investing in the future of technology and sustainability is not just a 
        smart business decision, but a moral imperative. By supporting the development of new technologies and 
        business models, we can create a more sustainable and equitable world for future generations.
        If you're an entrepreneur looking for funding, or just interested in learning more about our investment 
        strategy, please contact us to begin a conversation. We are always looking for new partners who share 
        our vision for a better future.
        </div>
    </main>
</template>

<script setup>
    //import pinia store
    const stateStore = useStateStore();
    //set path for breadcrub
    const pathNames = ["Home","About us"];
    const pathLinks = ["/"];
    //set last project pages visited
    stateStore.setDefaultLastProject();
</script>