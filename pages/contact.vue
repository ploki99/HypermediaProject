<!--
    Contact us page
-->
<template>
    <Breadcrumb :pathNames="pathNames" :pathLinks="pathLinks" />
    <main>

        <section class="container">
            <h2>Our contacts</h2>
            <p class="lead">Connect with us for a seamless experience and turn your requests into solutions.</p>
        </section>

        <section class="bg-light py-5">
            <div class="container">
                <div class="row">
                    <div class="col center-block text-center">
                        <i class="fa-solid fa-phone mb-4 contact_img"></i>
                        <p class="fw-bold fs-6">Telephone</p>
                        <div>+44 123 456 7890</div>
                    </div>
                    <div class="col center-block text-center">
                        <i class="fa-solid fa-envelope mb-4 contact_img"></i>
                        <p class="fw-bold fs-6">E-mail</p>
                        <div>info@bright-futures.com</div>
                    </div>
                    <div class="col center-block text-center">
                        <i class="fa-solid fa-house mb-4 contact_img"></i>
                        <p class="fw-bold fs-6">Address</p>
                        <div>London, 24 Oxford St, UK</div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="container">
            <p class="lead mt-4">You can also use this form to ask us anything you want.</p>
            <p>Please fill in all the fields, and we will get back to you as soon as possible.</p>
            <form id="contact_form" class="mb-5" >
                <div class="mb-3">
                    <label for="name" class="form-label">Full name:</label>
                    <div class="input-group">
                        <div class="input-group-text">
                            <i class="fa fa-user"></i>
                        </div>
                        <input type="text" class="form-control" id="name" placeholder="Enter name" required>
                        <div class="invalid-feedback">Please fill out this field.</div>
                    </div>
                </div>
                <div class="mb-3 mt-3">
                    <label for="email" class="form-label">Email:</label>
                    <div class="input-group">
                        <div class="input-group-text">
                            <i class="fa fa-envelope"></i>
                        </div>
                        <input type="email" class="form-control" id="email" placeholder="Enter email" required>
                        <div class="invalid-feedback">Please fill out this field with a correct email.</div>
                    </div>
                </div>
                <div class="mb-3 mt-3">
                    <label for="message">Message:</label>
                    <textarea class="form-control" rows="5" id="message" name="text" placeholder="Enter message" required></textarea>
                    <div class="invalid-feedback">Please fill out this field.</div> 
                </div>

                <!-- Success notification-->
                <div class="alert alert-success alert-dismissible d-none" id="notify">
                    <button  class="btn-close" @click="closeNotify"></button>
                    <p class="mb-0">
                        <strong class="me-1"><span id="notifyType">Success</span>!</strong> 
                        <span id="notifyMsg">Message correctly send, we will reply as soon as possible.</span>
                    </p>
                </div>

                <div class="display-flex text-center mt-4">
                    <button id="submit" class="btn btn-primary" @click="submit" >
                        <span id="submitLoading" class="spinner-border spinner-border-sm me-2 text-white d-none"></span>
                        <span id="submitText" class="text-white">Submit</span>
                    </button>
                </div>

            </form> 
        </section>

    </main>
</template>

<style>
    .contact_img {
        width: 60px;
        height: 60px;
        font-size: 2em;
        padding-top: 10px;
        border: 3px solid var(--accent-color);
        border-radius: 30px;
        color: var(--accent-color);
    }

    #contact_form{
        border: 1px solid var(--divider-color);
        padding: 1.5rem;
        border-radius: 6px;
    }
    
</style>

<script setup>
    //import pinia store
    const stateStore = useStateStore();
    //set path for breadcrub
    const pathNames = ["Home","Contact us"];
    const pathLinks = ["/"];
    //set last project pages visited
    stateStore.setDefaultLastProject();

    //function to handle submit click
    async function submit(e){
        //prevent default behaviour
        e.preventDefault();
        //close notify
        closeNotify();
        //validate form
        document.getElementById('contact_form').classList.add('was-validated');
        //get name, email and message
        let name = document.getElementById('name');
        let email = document.getElementById('email');
        let msg = document.getElementById('message');
        if ( name.validity.valid && email.validity.valid && msg.validity.valid ){
            //display load bar and disable button
            disableButton();
            // send data to the server
            try {
                const res = await $fetch('/api/contact', {
                    method: "POST",
                    body: {
                        name: name.value,
                        email: email.value,
                        msg: msg.value
                    }
                })
                //success
                setNotify('alert-danger','alert-success',"Success","Message correctly send, we will reply as soon as possible.");
                //clear form
                name.value = "";
                email.value = "";
                msg.value = "";
                document.getElementById('contact_form').classList.remove('was-validated');
            }
            catch{
                //set error
                setNotify('alert-success','alert-danger',"Error","Internal server error, please check your connection and try again.");
            }
            finally{
                //display notify
                document.getElementById('notify').classList.remove('d-none');
                enableButton();
            }
        }
    }
    //function to close notify
    function closeNotify(){
        document.getElementById('notify').classList.add('d-none');
    }
    //function to handle notify
    function setNotify(classToRemove, classToAdd, typeString, msg){
        document.getElementById('notify').classList.remove(classToRemove);
        document.getElementById('notify').classList.add(classToAdd);
        document.getElementById('notifyType').innerHTML = typeString;
        document.getElementById('notifyMsg').innerHTML = msg;
    }
    //function to disable button
    function disableButton(){
        document.getElementById('submitLoading').classList.remove('d-none');
        document.getElementById('submitText').innerHTML = "Sending data";
        document.getElementById('submit').disabled = true;
    }
    //function to re-enable button
    function enableButton(){
        document.getElementById('submitLoading').classList.add('d-none');
        document.getElementById('submitText').innerHTML = "Submit";
        document.getElementById('submit').disabled = false;
    }

    //set meta tag
    useSeoMeta({
        title: "Contact us - Bright Futures",
        description: "Want to get in touch with a reputable venture capital firm for your startup? Our team of experienced venture capitalists has a proven track record of helping startups grow and scale. Fill out our simple contact form to get in touch with us today."
    });
</script>