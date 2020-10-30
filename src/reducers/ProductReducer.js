import { FETCH_PRODUCTS } from "../actions/types";

const initialState = {
  items: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
