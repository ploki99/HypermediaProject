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
                    <div class="col-md-4 mx-auto mt-3">
                        <h6 class="text-uppercase mb-4">
                            <NuxtLink to="/about_us" class="footerLink">Bright Futures</NuxtLink>
                        </h6>
                        <p>We are experienced investors and entrepreneurs helping early stage startups succeed 
                            through funding, mentorship, and industry expertise.</p>
                    </div>
                    <!-- Grid column -->
                    <hr class="w-100 clearfix d-md-none" />
                    <!-- Grid column -->
                    <div class="col-md-4 mx-auto mt-3">
                        <h6 class="text-uppercase mb-4">
                            <NuxtLink to="/areas" class="footerLink">Areas of interest</NuxtLink>
                        </h6>
                        <p v-for="a of areas">{{ a.name }}</p>
                    </div>

                    <!-- Grid column -->
                    <hr class="w-100 clearfix d-md-none" />

                    <!-- Grid column -->
                    <div class="col-md-4 mx-auto mt-3">
                        <h6 class="text-uppercase mb-4">
                            <NuxtLink to="/contact" class="footerLink">Contact us</NuxtLink>
                        </h6>
                        <p><i class="fa-solid fa-phone fa-xs me-2"></i>+44 123 456 7890</p>
                        <p><i class="fa-solid fa-envelope fa-xs me-2"></i>info@bright-futures.com</p>
                        <p><i class="fa-solid fa-house fa-xs me-2"></i>London, 24 Oxford St, UK</p>
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
    .footerLink:hover{
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