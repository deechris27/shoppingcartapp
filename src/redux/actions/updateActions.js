import update from 'immutability-helper';

export const updateItems = (state, payload) => {
    let count = Number(state.count);
    let result;
    if (state.cart[payload].itemcount === 1) {
        count -= 1;
        localStorage.setItem("count", count);
        state.cart[payload].itemcount = 0;
        const filteredCartItems = state.cart.filter((item, i) => i !== payload)
        result = [...filteredCartItems];
    }
    if (state.cart[payload].itemcount > 1) {
        const filteredCartItems = state.cart.filter((item, i) => i !== payload)
        count -= state.cart[payload].itemcount;
        localStorage.setItem("count", count);
        state.cart[payload].itemcount = 0
        result = [...filteredCartItems]
    }
    return result;
};

export const increaseItems = (state, payload) => {
    let count = Number(state.count);
    let result;
    state.cart.forEach((item, i) => {
        if (i === payload) {
            count += 1;
            localStorage.setItem("count", count);
            state.cart[payload].itemcount++
            result = [...state.cart];
        }
    });

    return result;
};

export const addToCart = (state, payload) => {
    let count = Number(state.count);
    let result;
    state.cart && state.cart.length && state.cart.forEach((item, i)=>{
        if(item.name === state.items[payload].name){
            count += 1;
            localStorage.setItem("count", count);
            state.cart[payload].itemcount ? state.cart[payload].itemcount++ : state.cart[payload].itemcount = 1
            result = [...state.cart];
        }
    });

    if (state.cart.indexOf(state.items[payload]) === -1) {
        count += 1;
        localStorage.setItem("count", count);
        result = [...state.cart, state.items[payload]]
    } 

    return result;
};

export const decreaseItems = (state, payload) => {
    let count = Number(state.count);
    let result;
    if (state.cart[payload].itemcount > 1) {
        count -= 1;
        localStorage.setItem("count", count);
        state.cart[payload].itemcount--
        result = [...state.cart];
    }else if (state.cart[payload].itemcount === 1) {
        count -= 1;
        localStorage.setItem("count", count);
        state.cart[payload].itemcount--
        result = state.cart.filter((item, i) => i !== payload);
    }

    return result;
};