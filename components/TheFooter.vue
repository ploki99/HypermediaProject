<!--
  Footer of the page
-->

<template>
    <!-- Footer -->
    <footer class="text-center text-md-start" >
        <!-- Grid container -->
        <div class="container p-4 pb-0">
            <!-- Section: Links -->
            <section class="">
                <!--Grid row-->
                <div class="row">
                    <!-- Grid column -->
                    <div class="col-md-4 mx-auto mt-2">
                        <div class="fs-6 mb-3 text-uppercase fw-bold">
                            <NuxtLink to="/about_us" class="footerLink">Bright Futures</NuxtLink>
                        </div>
                        <p>We are experienced investors and entrepreneurs helping early stage startups succeed 
                            through funding, mentorship, and industry expertise.</p>
                    </div>
                    <!-- Grid column -->
                    <hr class="w-100 clearfix d-md-none" />
                    <!-- Grid column -->
                    <div class="col-md-4 mx-auto mt-2 pb-3">
                        <div class="fs-6 mb-3 text-uppercase fw-bold">
                            <NuxtLink to="/areas" class="footerLink">Areas of interest</NuxtLink>
                        </div>
                        <div v-for="a of areas" class="mb-2">
                            <NuxtLink class="subFooterLink" :to="'/areas/'+a.id">{{ a.name }}</NuxtLink>
                        </div>
                    </div>

                    <!-- Grid column -->
                    <hr class="w-100 clearfix d-md-none" />

                    <!-- Grid column -->
                    <div class="col-md-4 mx-auto mt-2 pb-3">
                        <div class="fs-6 mb-3 text-uppercase fw-bold">
                            <NuxtLink to="/contact" class="footerLink">Contact us</NuxtLink>
                        </div>
                        <div class="mb-2">
                            <NuxtLink to="tel:+44 123 456 7890" class="subFooterLink"><i class="fa-solid fa-phone fa-xs me-2"></i>+44 123 456 7890</NuxtLink>
                        </div>
                        <div class="mb-2">
                            <NuxtLink to="mailto:info@bright-futures.com" class="subFooterLink"><i class="fa-solid fa-envelope fa-xs me-2"></i>info@bright-futures.com</NuxtLink>
                        </div>
                        <div class="mb-2">
                            <NuxtLink to="https://maps.google.com/?q=London, 24 Oxford St, UK" target="_blank" class="subFooterLink"><i class="fa-solid fa-house fa-xs me-2"></i>London, 24 Oxford St, UK</NuxtLink>
                        </div>
                    </div>
                    <!-- Grid column -->
                </div>
                <!--Grid row-->
            </section>
            <!-- Section: Links -->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="text-center p-3" id="copyright_footer" >
            © 2023 Copyright: <b>Bright Futures</b>
        </div>
        <!-- Copyright -->
    </footer>
    <!-- Footer -->


</template>

<style>
    #copyright_footer{
        background-color: var(--dark-primary-color);
        color: var(--text-icons);
    }
    footer{
        color: var(--primary-text);
        background-color: var(--light-primary-color);
    }
    .footerLink{
        color: var(--primary-text);
    }
    .subFooterLink{
        color: var(--primary-text);
        text-decoration: none;
        font-weight: 500;
        font-style: italic;
    }
    .footerLink:hover,.subFooterLink:hover{
        color: var(--dark-primary-color);
    }
    /* Code to have footer always on page bottom */
    html, body, #__nuxt, .page {
        height: 100%;
    }
    .page {
        display: flex;
        flex-direction: column;
    }
    .content {
        flex: 1 0 auto;
    }
    footer {
        flex-shrink: 0;
    }
</style>

<script setup>
    //get areas from dataset
    const { data: areas } = await useFetch('/api/areas');      
</script>