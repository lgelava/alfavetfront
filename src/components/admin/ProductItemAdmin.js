import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { deleteProduct } from "../../redux/productActions";

const ProductItemAdmin = ({ product }) => {
  const dispatch = useDispatch();

  const history = useHistory();
  const onProductDelete = (id) => {
    axios
      .delete(`http://localhost:3001/deleteProduct/${id}`)
      .then(() => {
        dispatch(deleteProduct(id));
      })
      .catch((e) => console.log("e", e));
  };
  return (
    <div className="product_item">
      <div className="product_images_div">
        <img
          className="main_product_img"
          onClick={() => history.push(`/productInner/${product._id}`)}
          src={product.images[0]}
          alt={product.title}
        ></img>
      </div>
      <div className="title_and_text">
        <button onClick={() => onProductDelete(product._id)}>წაშლა</button>
        <div className="title">
          <h3>{product.title}</h3>
        </div>
        <div className="text">
          <p>{product.text}</p>
        </div>
        <button onClick={() => history.push(`/productInner/${product._id}`)}>
          მეტი...
        </button>
      </div>
    </div>
  );
};

export default ProductItemAdmin;
