import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";

import Loading from "../Body/Loading/Loading";
import NavBar from "../Body/NavBar/NavBar";
import Footer from "../Body/Footer/Footer";
import Home from "../Body/Home/HomeContent";

import Profile from "../Profile/Profile";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Shop from "../Shop/Shop";
// import Basket from "../Shop/Basket";

// PRODUCTS
import ProductList from "../Products/ProductList";
import AddProduct from "../Products/AddProduct";
import EditProduct from "../Products/EditProduct";

// STYLES
import 'bootstrap/dist/css/bootstrap.min.css'
import "animate.css/animate.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <Container fluid className="flex-grow-1 mt-5">
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/Profile" element={<Profile />} />

          <Route exact path="/ShoppingCart" element={<ShoppingCart />} />

          <Route exact path="/Shop" element={<Shop />} />

          {/* <Route exact path="/Basket" element={<Basket />} /> */}

          <Route exact path="/add" element={<AddProduct />} />

          <Route exact path="/edit/:id" element={<EditProduct />} />

          <Route exact path="/products" element={<ProductList />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
