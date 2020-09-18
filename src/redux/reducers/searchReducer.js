import { UPDATE_PRODUCTLIST } from "../actions/searchActions";

const initialState = {
  productList: [],

};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTLIST:
      return {
        ...state,
        productList: action.productList,
      };
    default:
      return state;
  }
};
