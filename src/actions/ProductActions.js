import { FETCH_PRODUCTS } from "./types";
import Data from "../data/Webdev_data2.json";

export const fetchProducts = () => (dispatch) => {
  dispatch({
    type: FETCH_PRODUCTS,
    payload: Data,
  });
};
