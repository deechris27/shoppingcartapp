export const applyRangeFilter = (state, minmax) => {
    const [min, max] = minmax;
    let newItems = JSON.parse(localStorage.getItem("mainState"));
    let result;
    if(min===0 && max==="100000"){
        result = JSON.parse(localStorage.getItem("mainState"));
    }
    if(!state.items.length || state.items.length < 8){
        result = newItems.filter(item => item.price.actual >= min && item.price.actual <= max);
    }else{
        result = state.items.filter(item => item.price.actual >= min && item.price.actual <= max);
    }
    return result;
};