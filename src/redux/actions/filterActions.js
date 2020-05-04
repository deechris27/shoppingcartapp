export const applyRangeFilter = (state, minmax) => {
    const [min, max] = minmax;
    if(min===0 && max==="100000"){
        return JSON.parse(localStorage.getItem("mainState"));
    }else{
        return state.items.filter(item => item.price.actual >= min && item.price.actual <= max);
    }
};