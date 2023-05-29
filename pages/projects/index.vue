<template>
    <Breadcrumb :pathNames="pathNames" :pathLinks="pathLinks" />
    <main class="container">
        <h2>Projects in our portfolio</h2>
        <p class="lead">Welcome to our project page!</p> 
        <p>Here you will find a comprehensive list of the exciting and innovative projects we have had the pleasure of supervising. 
            From cutting-edge technologies to sustainable solutions, our portfolio encompasses a diverse
            range of industries and sectors. We are proud of the success our portfolio companies have achieved and 
            look forward to continuing to invest in the future. </p>

        <div class="input-group rounded justify-content-center mt-4 mb-4">
            <input type="search" class="form-control rounded" v-model="insertedName" id="searchBar"
                    placeholder="Search project by name" aria-label="Search" aria-describedby="search-addon" />
            <span class="input-group-text border-0" id="search-addon">
                <i class="fa-solid fa-magnifying-glass"></i>
            </span>
        </div>    

        <Project v-for="p of filteredProjects" :name="p.name" :link="'/projects/'+p.id" :picture="p.picture"  />

        <p v-if="filteredProjects.length===0" class="fw-bold text-center" id="noProjects">No project found.</p>

    </main>
</template>

<style>
    #searchBar{
        max-width: 500px;
    }
    #search-addon{
        background-color: initial;
    }
    #noProjects{
        color: var(--secondary-text);
    }
</style>

<script setup>
    //import pinia store
    const stateStore = useStateStore();

    //get request from dataset
    const { data: projects } = await useFetch('/api/projects');
    
    //find project by name
    const insertedName = ref("");
    const filteredProjects = computed(() => {
        //if we don't insert anything, all projects are returned
        if ( insertedName.value == '' )
            return projects.value;
        const arr = [];
        //list of all words (all lower case)
        const words = insertedName.value.toLowerCase().split(' ');
        // filtering the list of projects
        for(let p of projects.value) {
            let check = true;
            //loop on all the words
            for (let w of words){
                if (! p.name.toLowerCase().includes(w) )
                    check = false;
            }
            if (check)
                arr.push(p);
        }
        // returning the filtered list
        return arr;
    })

    //set path for breadcrub
    const pathNames = ["Home","All projects"];
    const pathLinks = ["/"];
    //set last project pages visited
    stateStore.setDefaultLastProject();
</script>