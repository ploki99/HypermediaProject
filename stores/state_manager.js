export const useStateStore = defineStore('stateStore', {
    state: () => ({
      lastArea: "",
    }),
    getters: {
     // doubleCount: (state) => state.count * 2,
    },
    actions: {
      setLastArea(name){
        this.lastArea = name;
      },
    },
  });