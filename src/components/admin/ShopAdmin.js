import React from "react";
import ProductsAdmin from "./ProductsAdmin";
import AddProduct from "./addProduct/AddProduct";

const ShopAdmin = () => {
  return (
    <div>
      <AddProduct />
      <ProductsAdmin />
    </div>
  );
};

export default ShopAdmin;
