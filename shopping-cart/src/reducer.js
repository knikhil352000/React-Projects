import { CLEAR_CART, DECREASE, INCREASE } from "./action";
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
    return state;
}
export default reducer;