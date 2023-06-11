import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleUpdateProductForm, UpdateProductForm } from "../Redux/Action";

const UpdateProduct = () => {
  const { isUpdateForm, data } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleCloseCart1 = (close) => {
    dispatch(toggleUpdateProductForm(close));
  };
  const [inputs, setInputs] = useState({
    id: 30,
    images: ["https://i.dummyjson.com/data/products/1/1.jpg"],
    title: "iPhone 9",
    rating: 4.69,
    price: 549,
    quantity: 1
  });
  const handleChange = (event) => {
    console.log("e.target.id", event.target.value);
    const name = event.target.name;
    const value =
      event.target.name == "images"
        ? [event.target.value]
        : event.target.name == "id"
        ? parseInt(event.target.value)
        : event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs));
    dispatch(UpdateProductForm(inputs));
  };
  // disable the body-scroll when the Cart is open
  useEffect(() => {
    const docBody = document.body;

    isUpdateForm
      ? docBody.classList.add("overflow_hide")
      : docBody.classList.remove("overflow_hide");
  }, [isUpdateForm]);

  // closing the Cart on clicking outside of it

  useEffect(() => {
    const outsideClose = (e) => {
      if (e.target.id === "cart") {
        handleCloseCart1(false);
      }
    };

    window.addEventListener("click", outsideClose);

    return () => {
      window.removeEventListener("click", outsideClose);
    };
  }, [isUpdateForm]);

  return (
    <>
      {isUpdateForm && (
        <div id="cart">
          <div className="cart_content">
            <p className="textcentre">UPDATE PRODUCT</p>
            <div id="AddProduct">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-25">
                    <label for="fname">Id</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="number"
                      name="id"
                      maxLength="2"
                      min={0}
                      max={data.length}
                      placeholder={data.length}
                      required
                      onChange={(e) => handleChange(e)}
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label for="fname">Image</label>
                  </div>
                  <div className="col-75">
                    <select
                      id="images"
                      name="images"
                      onChange={(e) => handleChange(e)}
                    >
                      {data.map((ele) => {
                        return (
                          <option value={[ele && ele.images[0]]}>
                            {ele.images[0]}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label for="lname">Title</label>
                  </div>
                  <div className="col-75">
                    <select id="title" name="title" onChange={handleChange}>
                      {data.map((ele) => {
                        return (
                          <option value={ele && ele.title}>{ele.title}</option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label for="country">Rating</label>
                  </div>
                  <div className="col-75">
                    <select id="rating" name="rating" onChange={handleChange}>
                      {data.map((ele) => {
                        return (
                          <option value={ele && ele.rating}>
                            {ele.rating}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label for="country">Price</label>
                  </div>
                  <div className="col-75">
                    <select id="price" name="price" onChange={handleChange}>
                      {data.map((ele) => {
                        return (
                          <option value={ele && ele.price}>{ele.price}</option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <input type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateProduct;
