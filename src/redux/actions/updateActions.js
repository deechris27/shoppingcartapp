import update from 'immutability-helper';

export const updateItems = (state, payload) => {
    let count = Number(state.count);
    const filteredCartItems = state.cart.filter((item, i)=>i!==payload)
    count-=1;
    localStorage.setItem("count", count);
    state.cart[payload].itemcount--
    return filteredCartItems  
};

export const increaseItems = (state, payload) => {
    let count = Number(state.count);
    if(state.items[payload].name === state.cart[payload].name){
        count+=1;
        localStorage.setItem("count", count);
        state.cart[payload].itemcount++
        return [...state.cart];
    }else{
       count+=1;
       localStorage.setItem("count", count);
       return [...state.cart, state.items[payload]];
    }
};

export const addToCart = (state, payload) => {
    let count = Number(state.count);
   if(state.cart.indexOf(state.items[payload]) === -1){
      count+=1;
      localStorage.setItem("count", count);
      return [...state.cart, state.items[payload]];
   }else{
        count+=1;
        localStorage.setItem("count", count);
        state.cart[payload].itemcount++
        return [...state.cart]
   }
};

export const decreaseItems = (state, payload) => {
    let count = Number(state.count);
    if(state.items[payload].name === state.cart[payload].name && state.cart[payload].itemcount>1){
        count-=1;
        localStorage.setItem("count", count);
        state.cart[payload].itemcount--
        return [...state.cart];
    }if(state.cart[payload].itemcount===1){
        return [...updateItems(state, payload)];
    }
};