import { CLEAR_CART, DECREASE, GET_TOTALS, INCREASE, REMOVE } from "./action";
import { cartItems } from "./cart-items";
const reducer = (state, action) => {
    if(action.type === DECREASE) {
        let tempCart = [];
        if(action.payload.amount === 1) {
            tempCart = state.cart.filter((cartItem) => cartItem.id !== action.payload.id);
        } else {
            tempCart = state.cart.map(cartItem => {
                if(cartItem.id === action.payload.id) {
                    cartItem = {...cartItem, amount: cartItem.amount - 1}
                }
                return cartItem;
            })
        }
      return {
        ...state,
        cart: tempCart
      }
    }
    if(action.type === INCREASE) {
        let tempCart = state.cart.map(cartItem => {
            if(cartItem.id === action.payload.id) {
                cartItem = {...cartItem, amount: cartItem.amount + 1}
            }
            return cartItem;
        })
      return {
        ...state,
        cart: tempCart
      }
    }
    if(action.type === CLEAR_CART){
        return {
            ...state,
            cart: []
        }
    }
    if(action.type === REMOVE) {
        return {
            ...state,
            cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id)
        }
    }
    if(action.type === GET_TOTALS) {
        let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
            const { price, amount } = cartItem;
            return cartTotal;//Not able to Understand
        },
        {
            total: 0,
            amount: 0
        })
        return {
            ...state
        }
    }
    return state;
}
export default reducer;