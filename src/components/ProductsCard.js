import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItemFromList } from "../Redux/Action";

const ProductsCard = (props) => {
  const { images, rating, title, price } = props;

  const [isAdded, setIsAdded] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // here, we cannot directly pass the `props` as it is, if we need to access the same value within the child component. So, we've to pass it as a different prop like this- `{...props}`
    const item = { ...props };
    dispatch(addItem(item));

    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 3000);
  };
  const handleDeleteToCart = () => {
    // here, we cannot directly pass the `props` as it is, if we need to access the same value within the child component. So, we've to pass it as a different prop like this- `{...props}`
    const item = { ...props };
    dispatch(removeItemFromList(item));

    setIsDeleted(true);

    setTimeout(() => {
      setIsDeleted(false);
    }, 3000);
  };

  return (
    <>
      <div className="product_card">
        <figure>
          <img src={images && images[0]} alt="item-img" />
        </figure>
        <div className="textContainer">
          <strong className="rating">{rating}</strong>
          <h4 className="title">
            {title && title.length > 20 ? props.brand : title}
          </h4>
          <h3 className="price">₹ {price && price.toLocaleString()}</h3>
          <button
            type="button"
            className={`btn ${isAdded ? "added" : ""}`}
            onClick={handleAddToCart}
          >
            {isAdded ? "Added" : "Add to cart"}
          </button>
          <button
            type="button"
            className={`btn ${isDeleted ? "added" : ""}`}
            onClick={handleDeleteToCart}
          >
            {isDeleted ? "Deleted" : "Delete from list"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
