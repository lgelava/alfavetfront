import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsHandler } from "../../redux/productActions";
import ProductItemAdmin from "./ProductItemAdmin";
import axios from "axios";
const ProductsAdmin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getAllProducts")
      .then((res) => dispatch(getProductsHandler(res.data)));
  }, []);
  const products = useSelector((state) => state.products);
  console.log(products);
  return (
    <div className="products_outer">
      {products.map((product) => (
        <ProductItemAdmin product={product} key={product._id} />
      ))}
    </div>
  );
};

export default ProductsAdmin;
