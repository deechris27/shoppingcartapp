export const applyRangeFilter = (state, minmax) => {
    const [min, max] = minmax;
    return state.items.filter(item => item.price.actual >= min && item.price.actual <= max);
};