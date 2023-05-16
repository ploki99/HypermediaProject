<!--
    Header of the page
-->

<template>
    <nav class="navbar navbar-expand-sm bg-light">

        <div class="container-fluid">
        <!-- Links -->
        <ul class="navbar-nav" @mouseleave="closeProjects">
            <li class="nav-item" @mouseover="closeProjects">
                <NuxtLink to="/" class="nav-link" >Home</NuxtLink>
            </li>
            <li class="nav-item" @mouseover="closeProjects">
                <NuxtLink to="/team" class="nav-link">Team</NuxtLink>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" @mouseover="openProjects" @click="openProjects">Projects</a>
                <ul class="dropdown-menu" id="myDropdown" @mouseleave="closeProjects">
                    <li><NuxtLink class="dropdown-item" to="/projects">All projects</NuxtLink></li>
                    <li><NuxtLink class="dropdown-item" to="/projects/most_relevant">Most relevant projects</NuxtLink></li>
                    <li><NuxtLink class="dropdown-item" to="/projects/by_area">Projects by area</NuxtLink></li>
                </ul>
            </li> 
            <li class="nav-item" @mouseover="closeProjects">
                <NuxtLink to="/areas" class="nav-link">Areas</NuxtLink>
            </li>
        </ul>
        </div>

    </nav>


   

        
</template>

<script>
    //open and close projects
    export default {
        methods: {
            openProjects(event) {
                document.getElementById("myDropdown").classList.toggle("show")
            },
            closeProjects(event){
                document.getElementById("myDropdown").classList.remove("show");
            }
        }
    }

</script>

