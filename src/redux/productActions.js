export const actionTypes = {
  ADD_PRODUCT: "ADD_PRODUCT",
  GET_PRODUCTS_HANDLER: "GET_PRODUCTS_HANDLER",
  DELETE_PRODUCT: "DELETE_PRODUCT",
};

export const addProduct = (newProduct) => ({
  type: actionTypes.ADD_PRODUCT,
  newProduct,
});

export const getProductsHandler = (productList) => ({
  type: actionTypes.GET_PRODUCTS_HANDLER,
  productList,
});

export const deleteProduct = (id) => ({
  type: actionTypes.DELETE_POST,
  id,
});
