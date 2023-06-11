import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import Cart from "./components/Cart";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ProductData } from "././Redux/Action";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        dispatch(ProductData(response.data.products));
      })
      .catch((error) => {});
  }, []);
  return (
    <>
      <Header />
      <Home />
      <AddProduct />
      <UpdateProduct />
      <Footer />
      <Cart />
    </>
  );
};

export default App;
