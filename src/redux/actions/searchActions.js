export const UPDATE_PRODUCTLIST = "UPDATE_PRODUCTLIST";

export const updateProductList = (products) => {
	return { type: UPDATE_PRODUCTLIST, productList: products };
};
