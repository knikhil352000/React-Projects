import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import {cartItems} from "./cart-items";
import {createStore} from 'redux';
import reducer from "./reducer";
import {Provider} from 'react-redux'
// initial state
const initialState = {
  cart: cartItems,
  total: 10,
  amount: 5
};
const store = createStore(reducer, initialState);
function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
