import React from "react";
import ProductsCard from "../components/ProductsCard";
import { useSelector, useDispatch } from "react-redux";
import { toggleAddProductForm, toggleUpdateProductForm } from "../Redux/Action";

const Home = () => {
  const productsData = useSelector((state) => state.cart.data);

  const dispatch = useDispatch();

  const handleCloseCart = (close) => {
    dispatch(toggleAddProductForm(close));
  };
  const handleOpenCart = (close) => {
    dispatch(toggleUpdateProductForm(close));
  };
  return (
    <>
      <section id="home">
        <div className="TopContainer">
          <button
            className="btn productAdd"
            onClick={() => handleCloseCart(true)}
          >
            Add Product
          </button>
          <button
            className="btn productDelete"
            onClick={() => handleOpenCart(true)}
          >
            Update Product
          </button>
        </div>
        <div className="container">
          <div className="home_content">
            {productsData &&
              productsData.map((item) => (
                <ProductsCard key={item.id} {...item} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
