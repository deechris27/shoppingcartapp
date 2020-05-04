import {CART_DATA} from '../pages/shop/CartData';
import {updateItems, decreaseItems, increaseItems, addToCart} from './actions/updateActions';
import {sortPriceLowHigh, sortPriceHighLow, sortByDiscount} from './actions/sortActions';
import {applyRangeFilter} from './actions/filterActions';

const items = CART_DATA.items;
const initialState = {
     count: 0,
     cart: [],
     items
}

const ItemsReducer = (state=initialState, action)=> {
     switch(action.type){
         case 'ADD_TO_CART':
             return {
                 ...state,
                 cart: [...addToCart(state, action.payload)],
                 count: localStorage.getItem("count")
             }
          case 'SEARCH':
              const newItems = Number.isInteger(action.payload) ? state.items : state.items.filter(item => item.name.toLowerCase().includes(action.payload.toLowerCase()));
              return {
                  ...state,
                  items: newItems
              }
          case 'INCREASE':
              return {
                  ...state,
                  cart: [...increaseItems(state, action.payload)],
                  count: localStorage.getItem("count")
              }
          case 'DECREASE':
              return {
                  ...state,
                  cart: [...decreaseItems(state, action.payload)],
                  count: localStorage.getItem("count")
              }
          case 'REMOVE_ITEM':
              return {
                  ...state,
                  cart: [...updateItems(state, action.payload)],
                  count: localStorage.getItem("count")
              }
          case 'HIGH_TO_LOW':
              return {
                  ...state,
                  items: [...sortPriceHighLow(state)]
              }
          case 'LOW_TO_HIGH':
              return {
                  ...state,
                  items: [...sortPriceLowHigh(state)]
              }
          case 'DISCOUNT':
              return{
                  ...state,
                  items: [...sortByDiscount(state)]
              }
          case 'RANGE_FILTER':
              return {
                  ...state,
                  items: [...applyRangeFilter(state, action.payload)]
              }
         default:
             return state;
     }
};

export default ItemsReducer;