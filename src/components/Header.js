import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../Redux/Action";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleOpenCart = (open) => {
    dispatch(toggleCart(open));
  };

  const cartQuantity = cartItems && cartItems.length;

  return (
    <>
      <header id="header">
        <div className="container">
          <div className="navbar">
            <h2>Route To Smile</h2>
            <div className="nav_menu">
              <div
                title="Cart"
                className="cart_icon"
                onClick={() => handleOpenCart(true)}
              >
                <img
                  className="image"
                  src="/images/bag-icon.png"
                  alt="bag-icon"
                />
                <span className="badge">{cartQuantity}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
