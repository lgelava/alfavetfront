import React from 'react'
import { Link, useHistory } from "react-router-dom";

const ProductItem = ({product}) => {
  const history = useHistory();

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
          <div className="title">
            <h3>{product.title}</h3>
          </div>
          <div className="text">
            <p>{product.text}</p>
          </div>
          <button onClick={() => history.push(`/productInner/${product._id}`)}>მეტი...</button>
        </div>
      </div>
    )
}

export default ProductItem
