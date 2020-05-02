export const sortPriceLowHigh = state => {
    return state.items.sort((a, b) => { return a.price.actual - b.price.actual });
};

export const sortPriceHighLow = state => {
    return state.items.sort((a, b) => { return b.price.actual - a.price.actual });
};

export const sortByDiscount = state => {
    return state.items.sort((a, b) => { return b.discount - a.discount });
};