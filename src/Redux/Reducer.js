import {
  incrementItem1,
  decrementItem1,
  removeItem1,
  addItem1,
  ProductData1,
  toggleCart1,
  removeItemFromList1,
  AddProductForm1,
  UpdateProductForm1,
  toggleAddProductForm1,
  toggleUpdateProductForm1
} from "./Constant.js";

const initialState = {
  isCartOpen: false,
  cartItems: [],
  isAddForm: false,
  isUpdateForm: false
};

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductData1: {
      const quantity = 0;
      const data = action.payload.map((ele) => {
        return { ...ele, quantity: 1 };
      });
      return { ...state, data: data };
    }
    case addItem1:
      var existingdata;
      if (state.cartItems.length > 0) {
        existingdata = state.cartItems.map((product) => {
          if (product.id === action.payload.id) {
            return Object.assign({}, product, {
              quantity: product.quantity + 1
            });
          }
        });
        if (existingdata[0] !== undefined) {
          return {
            ...state,
            cartItems: existingdata
          };
        } else {
          return {
            ...state,
            cartItems: state.cartItems.concat(action.payload)
          };
        }
      }
      return {
        ...state,
        cartItems: state.cartItems.concat(action.payload)
      };
    case removeItem1:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload)
      };
    case incrementItem1:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload) {
            item.quantity++;
          }
          return item;
        })
      };
    case decrementItem1:
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) => {
            if (item.id === action.payload) {
              item.quantity--;
            }
            return item;
          })
          .filter((item) => item.quantity !== 0)
      };
    case toggleCart1:
      return { ...state, isCartOpen: action.payload };
    case removeItemFromList1:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload.id)
      };
    case toggleAddProductForm1:
      return { ...state, isAddForm: action.payload };
    case toggleUpdateProductForm1:
      return { ...state, isUpdateForm: action.payload };
    case AddProductForm1:
      return {
        ...state,
        data: state.data.concat(action.payload)
      };
    case UpdateProductForm1:
      return {
        ...state,
        data: state.data.map((product) => {
          if (product.id === action.payload.id) {
            return Object.assign({}, action.payload);
          } else {
            return product;
          }
        })
      };
    default:
      return state;
  }
};
export default CartReducer;
