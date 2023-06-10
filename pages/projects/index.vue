<template>
    <Breadcrumb :pathNames="pathNames" :pathLinks="pathLinks" />
    <main class="container">
        <h2>Projects in our portfolio</h2>
        <p class="lead">Welcome to our project page!</p> 
        <p>Here you will find a comprehensive list of the exciting and innovative projects we have had the pleasure of supervising. 
            From cutting-edge technologies to sustainable solutions, our portfolio encompasses a diverse
            range of industries and sectors. We are proud of the success our portfolio companies have achieved and 
            look forward to continuing to invest in the future. </p>

        
        <div class="my-4">
            <div class="input-group rounded">
                <button class="btn btn-primary dropdown-toggle input" data-bs-toggle="collapse" data-bs-target="#filterOptions">Options</button>
                <input type="search" class="form-control rounded-end" v-model="insertedName"
                        placeholder="Search project by name" aria-label="Search" aria-describedby="search-addon" />
                <span class="input-group-text border-0" id="search-addon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>              
            </div>  

            <div id="filterOptions" class="collapse bg-light">
                <div class="row p-2">
                    <div class="col-md-6">

                        <table>
                            <tbody>
                                <tr> 
                                    <td class="align-top">   
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" id="filterSwitch" v-model="filterArea">
                                            <label class="form-check-label" for="filterSwitch">Filter by area:</label>
                                        </div>
                                    </td>    
                                    <td class="ps-3">
                                        <div>
                                            <div v-for="a of areas" class="form-check">
                                                <input class="form-check-input areaOptions" type="checkbox" :id="'checked'+a.id" 
                                                    @click="triggerFilter" checked disabled>
                                                <label class="form-check-label" :for="'checked'+a.id" >{{ a.name }}</label>
                                            </div>
                                        </div>
                                    </td> 
                                </tr>
                            </tbody>
                        </table>

                    </div>
               
                    <div class="col-md-6">
                        <table>
                            <tbody>
                                <tr>
                                    <td class="align-top">Order by:</td>
                                    <td class="ps-3">            
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" id="radio1" name="optradio" value="0" v-model="sortBy" checked>
                                            <label class="form-check-label" for="radio1">Name (ascending)</label>
                                        </div>
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" id="radio2" name="optradio" value="1" v-model="sortBy">
                                            <label class="form-check-label" for="radio2">Name (descending)</label>
                                        </div>
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" id="radio3" name="optradio" value="2" v-model="sortBy">
                                            <label class="form-check-label" for="radio3">Relevance</label>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
        

        <ListItem v-for="p of filteredProjects" :name="p.name" :link="'/projects/'+p.id" :picture="p.picture" :small="false" alt="project icon" />

        <p v-if="filteredProjects.length===0" class="fw-bold text-center" id="noProjects">No project found.</p>

    </main>
</template>

<style>
    #search-addon{
        background-color: initial;
    }
    #filterOptions{
        width: calc(100% - 40px);
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
    const { data: areas } = await useFetch('/api/areas');
    
    //utility functions
    function manageEnableAreas(check){
        try { //document could be undefined at the loading of the page
            for (let el of document.getElementsByClassName('areaOptions'))
                el.disabled=!check;    
        } catch (error) {}
    }
    //dirty trick to trigger the computed method
    function triggerFilter(){
        filterByArea.value = !filterByArea.value;
    }
    //get selected areas with checkboxes
    function getSelectedAreas(){
        try { //document could be undefined at the loading of the page
            let ret = [];
            let i = 0
            for (let el of document.getElementsByClassName('areaOptions')){
                if (el.checked){
                    ret.push(areas.value[i].name);
                }   
                i++;
            }
            return ret;
        } catch (error) {}
    }

    //manage search bar
    //inserted name
    const insertedName = ref("");
    //if true, filter by areas
    const filterArea = ref(false);
    //trigger the filter when clicking on the checkboxes of the areas
    const filterByArea = ref(true);
    //contains the ordering method
    const sortBy = ref(0);

    const filteredProjects = computed(() => {
        //check graphical stuff
        manageEnableAreas(filterArea.value);
        //trigger this method when clicking on one of the checkboxes
        if (filterByArea.value);
        //retrieve the selected areas with the checkboxes
        const selectedAreas = getSelectedAreas();
        //array with the filtered projects
        let arr = projects.value.slice();
        
        //first filter by name
        if ( insertedName.value != '' ){
            arr = [];
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
        }
        //then filter by area
        if (filterArea.value){
            const arr2 = [];
            for(let p of arr){
                //extract all the areas of the project
                let areasVect = p.areas.map(a => a.name);
                //intersection between project areas and selected areas
                let inters = areasVect.filter(value => selectedAreas.includes(value));
                if (inters.length > 0) //keep the element
                    arr2.push(p)
            }
            arr = arr2;
        }
        //finally, sort the projects according to the criterium
        if (parseInt(sortBy.value) === 1)
            arr = arr.reverse();
        else if (parseInt(sortBy.value) === 2)
            arr.sort( (a,b) => a.relevance_index < b.relevance_index );

        // returning the filtered list
        return arr;
    })

    //set path for breadcrub
    const pathNames = ["Home","All projects"];
    const pathLinks = ["/"];
    //set last project pages visited
    stateStore.setDefaultLastProject();

    //set meta tag
    useSeoMeta({
        title: "All projects - Bright Futures",
        description: "Discover the projects overseen by our top-notch venture capital firm. Our team of experts ensures that each project meets the highest industry standards, explore our portfolio today and find out how we can help you take your investment to the next level."
    });
</script>