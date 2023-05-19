export const useStateStore = defineStore('stateStore', {
    state: () => ({
      //used to have a better breadcrumb
      lastArea: "",
      lastProjectPage: "All projects",
      lastProjectLink: "/projects"
    }),
    getters: {
     // doubleCount: (state) => state.count * 2,
    },
    actions: {
      setLastArea(name){
        this.lastArea = name;
      },
      setLastProjectPage(name){
        this.lastProjectPage = name;
      },
      setLastProjectLink(link){
        this.lastProjectLink = link;
      },
      setDefaultLastProject(){
        this.lastProjectPage = "All projects";
        this.lastProjectLink = "/projects";
      }
    },
  });