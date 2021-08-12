import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Header from './components/Header';
import Cart from './components/Cart';
import {CartProvider} from 'react-use-cart'

const App =()=>{
  return(
    <div>
      
      <CartProvider>
      <Header />
      <Cart />
      </CartProvider>
    </div>
  );
}

ReactDOM.render(<App />,document.getElementById("root"));
