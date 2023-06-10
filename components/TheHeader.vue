<!--
    Header of the page
-->

<template>

    <nav class="navbar navbar-expand-md navbar-dark p-3 fixed-top">
	    <div class="container-fluid">
	      <NuxtLink to="/" class="navbar-brand" ><img src="~/assets/img/logo.png" id="logo" alt="Bright Futures"> </NuxtLink>
	      <button class="navbar-toggler"  data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
	        <span class="navbar-toggler-icon"></span>
	      </button>
	    
	      <div class=" collapse navbar-collapse" id="navbarNavDropdown">
	        <ul class="navbar-nav ms-auto ">
	          <li class="nav-item">
	            <NuxtLink class="nav-link mx-2 navItem" to="/team">Team</NuxtLink>
	          </li>
	          <li class="nav-item dropdown">
	            <NuxtLink class="nav-link mx-2 dropdown-toggle navItem" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
	              Projects
                </NuxtLink>
	            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
	              <li><NuxtLink class="dropdown-item navSubItem" to="/projects">All projects</NuxtLink></li>
	              <li><NuxtLink class="dropdown-item navSubItem" to="/projects/most_relevant">Most relevant projects</NuxtLink></li>
	              <li><NuxtLink class="dropdown-item navSubItem" to="/projects/by_area">Projects by area</NuxtLink></li>
	            </ul>
	          </li>
              <li class="nav-item">
	            <NuxtLink class="nav-link mx-2 navItem" to="/areas">Areas</NuxtLink>
	          </li>
              <li class="nav-item">
	            <NuxtLink class="nav-link mx-2 navItem" to="/about_us">About us</NuxtLink>
	          </li>
              <li class="nav-item">
	            <NuxtLink class="nav-link mx-2 navItem" to="/contact">Contact us</NuxtLink>
	          </li>
	        </ul>
	      </div>
	    </div>
	    </nav>


</template>


<style>
	#logo{
		height: 35px;
		width: auto;
		margin-top: -5px;
		margin-bottom: -5px;
	}

    .navbar{
        background-color: var(--dark-primary-color);
    }

    .navbar .dropdown-menu{
        background-color: var(--primary-color);
        margin-top: 16px;
        border: 0;
        border-radius: 0;
    }

    .navSubItem{
        color: var(--text-icons);
    }

    .navItem{
        color: var(--text-icons);
        text-decoration: underline 0.15em var(--dark-primary-color);
        text-underline-offset: 7px;
        transition: text-decoration-color 400ms;
    }

    .navItem:hover{
        color: var(--text-icons);
        text-decoration-color: var(--text-icons);
    }

	#navbarDropdownMenuLink.show{
		text-decoration: underline 0.15em var(--text-icons);
	}

	.navItem:focus, .navItem.router-link-active{
		color: var(--text-icons);
		text-decoration: underline 0.15em var(--text-icons);
	}

	.dropdown-menu .router-link-active{
		text-decoration: none;
		color: var(--primary-text);
		background-color: var(--light-primary-color);
	}

	.navSubItem:hover{
		color: var(--primary-text);
		background-color: var(--light-primary-color);
	}

</style>
