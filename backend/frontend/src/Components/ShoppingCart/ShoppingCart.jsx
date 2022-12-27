import React, { useDeferredValue, useEffect, useState, useTransition } from 'react';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import axiosInstance from "../../config";
import Loading from "../Body/Loading/Loading";

import Basket from '../Shop/Basket';
import Header from '../Shop/Header';
// import Main from '../Shop/Main';


// CSS
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.min.css";
import "font-awesome/css/font-awesome.min.css";
import './shopping-cart.css'

const Shopping = () => {
  const { user } = useAuth0();

  const [cartItems, setCartItems] = useState([]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async (req, res) => {
      try {
        res = await axiosInstance.get('/api/products');
        setProducts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getProducts()
    }, [products])
  // }, [])

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== product.id);
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    } else {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }
  };

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      setCartItems(
        localStorage.getItem('cartItems')
          ? JSON.parse(localStorage.getItem('cartItems'))
          : []
      );
    });
  }, []);

  const cartItemsCount = useDeferredValue(cartItems.length);

  return isPending ? (
    <div>Loading...</div>
  ) : (
    <div className="Shop">
      <h1 className="h-1">Hello {user.name}</h1>
      <Header countCartItems={cartItemsCount} />
      {/* <div className="row fix-checkout" style={{"display":"none"}}>
        <Main
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          products={products}
        />
      </div> */}
      <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
    </div>
  );
};

export default withAuthenticationRequired(Shopping, {
  onRedirecting: () => <Loading />,
})
