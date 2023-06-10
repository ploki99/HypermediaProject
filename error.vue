<!--
    This is an error page.
    Whenever a route that doesn't exist is called, this page will be shown.
-->

<template>
    <NuxtLayout>
        <main>
            <div class="d-flex align-items-center justify-content-center">
                <div class="text-center mt-5">
                    <h1 class="display-1 fw-bold">{{ error.statusCode }}</h1>
                    <p class="fs-3"> <span class="text-danger">Oops!</span> {{ errorType }}</p>
                    <p class="lead">
                        {{ errorMessage }}
                    </p>
                    <button @click="handleError" class="btn btn-primary">Go Home</button>
                </div>
            </div>

        </main>
    </NuxtLayout>
</template>

<script setup>
    //get error
    const props = defineProps({
        error: Object
    })
    //set error type
    const errorType = props.error.statusCode === 404 ? "Page not found." : "Internal server error.";
    //set error message
    const errorMessage = props.error.statusCode === 404 ? "The page you're looking for doesn't exist." : "Invalid url or internal server error."
    //return home
    const handleError = () => clearError({ redirect: '/' });
    
    //set meta tag
    useSeoMeta({
        title: "Error page - Bright Futures",
        description: "This is an error page, please return to the Home or use the menu to continue the navigation."
    });
</script>