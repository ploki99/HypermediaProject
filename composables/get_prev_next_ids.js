//Function to get previous and next id given an object from database
//Used to compute prev and next links for team/project/area pages

// condition can be a lambda expression to filter the element of data
// under a certain conditions. default is false => no filtering applied

export function getPrevNextIds(data,id,condition=false) {
    let idList = [];
    for (let el of data){
        if (condition){
            if (condition(el))
                idList.push(el.id);
        }else{
            idList.push(el.id);
        }
    }
    const idx = idList.indexOf(parseInt(id));
    const prevId = idList[(idx + idList.length -1) % idList.length];
    const nextId = idList[(idx+1) % idList.length];
    return [prevId,nextId,idx,idList.length];
}