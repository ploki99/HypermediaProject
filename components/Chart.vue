<!--
    Chart component: display the graph of the number of projects in each area.
    The chart can be costumized passing the id and the dimension as props.
    Moreover the chart is not dependent on the number of projects and the 
    number of areas: we use the data retrieved in the database
-->

<template>
    <h4 class="mb-3 text-center">Number of projects in each area</h4>
    <div class="d-flex justify-content-center">
        <div :style="'width: ' + chartDim + '; height: ' + chartDim">
            <canvas :id="chartId"></canvas>
        </div>
    </div>
</template>

<script>
    export default{
        //define props
        props:{
            id : String,
            dimension : String
        },
        async setup(props){
            //get request from dataset
            const { data: projects } = await useFetch('/api/projects');
            let data = {};
            for (let p of projects.value){
                for (let a of p.areas){
                    if (data[a.name] === undefined)
                        data[a.name] = 0;                      
                    data[a.name]++;
                }
            }
            const chartId = props.id;
            const chartDim = props.dimension;
            return {data,chartId,chartDim}
        },
        methods:{
            createGraph(){
                //set areas and number of projects
                let labels = [];
                let values = [];
                for (let a in this.data){
                    labels.push(a);
                    values.push(this.data[a]);
                }
                //set a generic list of colors (palette based on --accent-color)
                const colorsPalette = ["#536dfe","#ff8f72","#ffc659","#e459da","#f9f871","#ff60a4"];
                //set colors for areas
                let colors = [];
                for (let i = 0 ; i < labels.length ; i++)
                    colors.push(colorsPalette[ i % colorsPalette.length ]);
                //data for the graph
                const data = {
                    labels: labels,
                    datasets: [{
                        label: 'Projects in this area',
                        data: values,
                        backgroundColor: colors,
                        hoverOffset: 4
                    }]
                };
                //register the datalabels plugin
                Chart.register(ChartDataLabels);
                new Chart(document.getElementById(this.chartId), {
                    type: 'doughnut',
                    data: data,
                    options: {
                        plugins: {
                            //set labels
                            datalabels:{
                                color: 'white',
                                font: {
                                    size: 20,
                                    weight: 'bold'
                                }
                            },
                            //set legend
                            legend:{
                                display: true,
                                position: 'bottom'
                            }
                        }
                    }
                });

            }
        },
        //we create the chart when the canvas is loaded
        beforeMount(){
            this.createGraph();
        }
    }

</script>