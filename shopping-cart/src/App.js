import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import {cartItems} from "./cart-items";
// redux stuff

import {createStore} from 'redux';
import { DECREASE, INCREASE } from "./action";
// reducer
// initial state

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
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
  return state;
}
const store = createStore(reducer, initialState);

store.dispatch({type: INCREASE})

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()}/>
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
