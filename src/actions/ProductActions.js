import { FETCH_PRODUCTS, FETCH_PRODUCT } from "./types";
import Data from "../data/Webdev_data2.json";

export const fetchProducts = () => (dispatch) => {
  dispatch({
    type: FETCH_PRODUCTS,
    payload: Data,
  });
};

export const fetchProduct = (productID) => (dispatch) => {
  const product = Data.find((product) => product.id === productID);
  dispatch({
    type: FETCH_PRODUCT,
    payload: product,
  });
};
