<!--
    Contact us page
-->
<template>
    <Breadcrumb :pathNames="pathNames" :pathLinks="pathLinks" />
    <main class="container-fluid">
        <h1>Our contacts</h1>
        <div>You can contact us directly with the following contacts or by compiling the following form</div>
        <div class="row contact_grid">
            <div class="col center-block text-center">
                <img src="~assets/img/phone.png" alt="phone" class="contact_img">
                <h5>Telephone</h5>
                <div>+44 113 761 1243</div>
            </div>
            <div class="col center-block text-center">
                <img src="~assets/img/mail.png" alt="mail" class="contact_img">
                <h5>E-mail</h5>
                <div>info@bright-futures.com</div>
            </div>
            <div class="col center-block text-center">
                <img src="~assets/img/home.png" alt="home" class="contact_img">
                <h5>Address</h5>
                <div>London, 24 Oxford St, UK</div>
            </div>
        </div>
        <!-- <form action="/action_page.php" class="contact_form">
            <div class="mb-3 mt-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
            </div>
            <div class="mb-3">
                <label for="pwd" class="form-label">Password:</label>
                <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
            </div>
            <div class="form-check mb-3">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" name="remember"> Remember me
                </label>
            </div>
            <button type="submit" class="btn btn-primary submit_button">Submit</button>
        </form> -->
    </main>
</template>

<style>
    .contact_grid {
        margin: 5%;
    }
    .contact_img {
        width:50px;
    }
    /*
    .contact_form {
        margin: 10%;
        padding: 2%;
        border: 2px solid darkblue;
        border-radius: 10px;
    }
    .submit_button {
        margin-bottom: 16px;
    } 
    */
</style>

<script setup>
    //import pinia store
    const stateStore = useStateStore();
    //set path for breadcrub
    const pathNames = ["Home","Contact us"];
    const pathLinks = ["/"];
    //set last project pages visited
    stateStore.setDefaultLastProject();

    //set meta tag
    useSeoMeta({
        title: "Contact us - Bright Futures",
        description: "Want to get in touch with a reputable venture capital firm for your startup? Our team of experienced venture capitalists has a proven track record of helping startups grow and scale. Fill out our simple contact form to get in touch with us today."
    });
</script>