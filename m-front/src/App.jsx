import React from 'react';
import{BrowserRouter, Route, Routes} from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import {Navbar} from './components/Navbar';
import {Login} from './screens/Login';
import { Register } from "./screens/Register";
import Products from './screens/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route
            index
            path="/home"
            element={<HomeScreen></HomeScreen>}
            exact
          ></Route>
          <Route path='/products' element={<Products/>} />
          <Route
            path="/product/:id"
            element={<ProductScreen></ProductScreen>}
          ></Route>
          <Route path="/cart/:id/:qty" element={<CartScreen />}></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
