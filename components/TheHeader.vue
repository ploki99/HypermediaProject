<!--
    Header of the page
-->

<template>

	<header>
		<nav class="navbar navbar-expand-md navbar-dark px-3 py-0 fixed-top">
			<div class="container-fluid">
				<NuxtLink to="/" class="navbar-brand align-middle closeOnClick" id="logo">
					<img src="~/assets/img/logo.png" alt="Bright Futures"> 
				</NuxtLink>
				<button id="navToggler" class="navbar-toggler"  data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				
				<div class=" collapse navbar-collapse" id="navbarNavDropdown">
					<ul class="navbar-nav ms-auto ">
					<li class="nav-item">
						<NuxtLink class="nav-link navItem closeOnClick" to="/team">Team</NuxtLink>
					</li>
					<li class="nav-item dropdown">
						<NuxtLink class="nav-link dropdown-toggle navItem" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Projects
						</NuxtLink>
						<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
						<li><NuxtLink class="dropdown-item navSubItem closeOnClick" to="/projects">All projects</NuxtLink></li>
						<li><NuxtLink class="dropdown-item navSubItem closeOnClick" to="/projects/most_relevant">Most relevant projects</NuxtLink></li>
						<li><NuxtLink class="dropdown-item navSubItem closeOnClick" to="/projects/by_area">Projects by area</NuxtLink></li>
						</ul>
					</li>
					<li class="nav-item">
						<NuxtLink class="nav-link navItem closeOnClick" to="/areas">Areas</NuxtLink>
					</li>
					<li class="nav-item">
						<NuxtLink class="nav-link navItem closeOnClick" to="/about_us">About us</NuxtLink>
					</li>
					<li class="nav-item">
						<NuxtLink class="nav-link navItem closeOnClick" to="/contact">Contact us</NuxtLink>
					</li>
					</ul>
				</div>
			</div>
	    </nav>
	</header>

</template>

<script setup>
	//function to close the dropdown menu on click (useful for smartphone)
	function closeDropdown(){
		const menuToggle = document.getElementById('navbarNavDropdown');
		//if the toggle button is visible, close
		if (window.getComputedStyle(menuToggle).display === 'block'){
			const bsCollapse = new bootstrap.Collapse(menuToggle);
			bsCollapse.toggle();
		}
	}
	//wait the DOM to be created 
    onMounted(() => {
        const links = document.getElementsByClassName('closeOnClick');
		for (let l of links)
			l.addEventListener('click',closeDropdown);
    });
</script>

<style>
	#logo{
		padding-top: 21px;
		padding-bottom: 16px;
	}

	#logo img{
		height: 35px;
		width: auto;
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

	@media screen and (max-width:768px){
		#navbarNavDropdown{
			padding-bottom: 15px;
		}
	}

    .navSubItem{
        color: var(--text-icons);
    }

    .navItem{
        color: var(--text-icons);
		width: fit-content;
        transition: border-color 350ms linear;
		padding: 8px 0px 1px 0px !important;
		margin: 0px 16px 3px 16px;
		border-bottom: 4px solid var(--dark-primary-color)
    }

    .navItem:hover{
        color: var(--text-icons);
        border-color: var(--text-icons);
    }

	#navbarDropdownMenuLink.show{
		border-color: var(--text-icons);
	}

	.navItem:focus, .navItem.router-link-active{
		color: var(--text-icons);
		border-color: var(--text-icons);
	}

	.dropdown-menu .router-link-active{
		color: var(--primary-text);
		background-color: var(--light-primary-color);
	}

	.navSubItem:hover{
		color: var(--primary-text);
		background-color: var(--light-primary-color);
	}

</style>
