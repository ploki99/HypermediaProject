<!--
    Slideshow component
-->

<template>

    <!-- Carousel -->
    <div :id="id" class="carousel slide" data-bs-ride="carousel">

        <!-- Indicators/dots -->
        <div class="carousel-indicators">
            <span v-for="i of classes.length">
                <button :data-bs-target="'#'+id" :data-bs-slide-to="i-1" :class="classes[i-1]" title="Change Slide"></button>
            </span>   
        </div>

        <!-- The slideshow/carousel -->
        <div class="carousel-inner">
            <span v-for="i of names.length">
                <div :class="'carousel-item '+classes[i-1]">
                    <img :src="images[pictures[i-1]]" alt="" class="d-block w-100">
                    <div class="carousel-caption container">
                        <p class="fw-bold fs-5 mb-2">{{ names[i-1] }}</p>
                        <NuxtLink :to="links[i-1]" class="btn btn-carousel btn-sm">Discover more</NuxtLink>
                    </div>
                </div>
            </span>
        </div>

        <!-- Left and right controls/icons -->
        <button class="carousel-control-prev" :data-bs-target="'#'+id" data-bs-slide="prev" title="Previous Slide">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" :data-bs-target="'#'+id" data-bs-slide="next" title="Next Slide">
            <span class="carousel-control-next-icon"></span>
        </button>
    </div>

</template>

<script setup>
    //define props
    const props = defineProps(['id','names','pictures','links']);
    //
    const classes = ['active'];
    for(let i=1; i<props.names.length; i++)
        classes.push('');
    //get all images
    const images = getAllImages();

</script>

<style>
    .carousel-caption{
        background-color: var(--primary-text);
        opacity: 0.9;
        left: 0;
        padding-bottom: 3rem;
        bottom: 0;
        width: 100%;
        position: relative;
    }
    .carousel-caption p{
        color: var(--text-icons);
    }

    .btn-carousel{
        background-color: var(--dark-primary-color);
        border-color: var(--dark-primary-color);
        color: var(--text-icons);
        font-weight: 500;
    }

    .btn-carousel:hover{
        background-color: var(--primary-color);
        border-color: var(--primary-color);
    }
    
    /*make buttons more visible */
    .carousel-control-prev, .carousel-control-next,
    .carousel-control-prev:focus, .carousel-control-next:focus{
        opacity: 0.7;
    }
    .carousel-control-prev:hover, .carousel-control-next:hover,
    .carousel-control-prev:focus:hover, .carousel-control-next:focus:hover{
        opacity: 1;
    }
    .carousel-control-prev span{
        background-position: 45%;
    }
    .carousel-control-next span{
        background-position: 55%;
    }
    .carousel-control-prev span, .carousel-control-next span{
        background-color: var(--primary-text);
        border-radius: 50%;
        background-size: 75%;
        padding: 20px;
        position: inherit;
        top: 40%;
    }
    @media screen and (max-width:992px){
		.carousel-control-prev span, .carousel-control-next span{
			top: 30%;
		}
	}
    @media screen and (max-width:768px){
		.carousel-control-prev span, .carousel-control-next span{
			top: 20%;
		}
	}
</style>