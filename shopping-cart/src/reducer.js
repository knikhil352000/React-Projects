import { CLEAR_CART, DECREASE, INCREASE, REMOVE } from "./action";
import { cartItems } from "./cart-items";
const reducer = (state, action) => {
    if(action.type === DECREASE) {
      return {
        ...state,
        count: state.count - 1
      }
    }
    if(action.type === INCREASE) {
      return {
        ...state,
        count: state.count + 1
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
    return state;
}
export default reducer;