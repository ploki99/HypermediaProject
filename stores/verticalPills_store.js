export const usePillsStore = defineStore('pillsStore', {
    state: () => ({
        mapOfPills: {},
    }),
    actions: {
        getLastIndex(pillsId){
            if (this.mapOfPills[pillsId] === undefined)
                this.mapOfPills[pillsId] = 0;
            return this.mapOfPills[pillsId];
        },
        setLastIndex(pillsId,idx){
            this.mapOfPills[pillsId] = idx;
        }
    },
});