import {
  incrementItem1,
  decrementItem1,
  removeItem1,
  addItem1,
  ProductData1,
  toggleCart1,
  removeItemFromList1,
  toggleAddProductForm1,
  toggleUpdateProductForm1,
  AddProductForm1,
  UpdateProductForm1
} from "./Constant.js";
import axios from "axios";
export const fetchusers = () => {
  return function (dispatch) {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        const user = response.data;
        dispatch(ProductData(user));
      })
      .catch((error) => {});
  };
};

export const incrementItem = (data) => {
  return {
    type: incrementItem1,
    payload: data
  };
};
export const decrementItem = (data) => {
  return {
    type: decrementItem1,
    payload: data
  };
};
export const removeItem = (data) => {
  return {
    type: removeItem1,
    payload: data
  };
};
export const removeItemFromList = (data) => {
  return {
    type: removeItemFromList1,
    payload: data
  };
};

export const addItem = (data) => {
  return {
    type: addItem1,
    payload: data
  };
};
export const ProductData = (data) => {
  return {
    type: ProductData1,
    payload: data
  };
};
export const toggleCart = (data) => {
  return {
    type: toggleCart1,
    payload: data
  };
};

export const AddProductForm = (data) => {
  return {
    type: AddProductForm1,
    payload: data
  };
};
export const UpdateProductForm = (data) => {
  return {
    type: UpdateProductForm1,
    payload: data
  };
};
export const toggleAddProductForm = (data) => {
  return {
    type: toggleAddProductForm1,
    payload: data
  };
};
export const toggleUpdateProductForm = (data) => {
  return {
    type: toggleUpdateProductForm1,
    payload: data
  };
};
