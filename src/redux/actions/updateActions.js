export const updateItems = (state, payload) => {
    return state.cart.filter((item, i)=>i!==payload)
};

export const increaseItems = (state, payload) => {
    let itemsInCart = state.cart;
    state.cart.forEach(item=>{
        if(item.name === itemsInCart[payload].name){
            itemsInCart.push(state.items[payload])
        }
    })
    console.log("tunniii....",itemsInCart);
   return itemsInCart;
};

export const decreaseItems = (state, payload) => {
    return state.cart.filter(item=>item.name !== state.cart[payload].name);
};