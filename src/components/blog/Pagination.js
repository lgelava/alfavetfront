import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pageClick } from "../../redux/postActions";
import "./Posts.css";

const Pagination = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  
  const pageNumbers = [];
 const [pageNumber, setPageNumber] = useState([])

  useEffect(() => {
    for (let i = 1; i <= Math.ceil(posts.length / 7); i++) {
      pageNumbers.push(i);
      setPageNumber(pageNumbers)
    }
   
  }, []);
 
  return (
    <div className="paginationPages">
      {(pageNumber.length != 0) ? pageNumber.map((number) => (
        <button
          onClick={() => dispatch(pageClick(number))}
          key={number}
          className="btn_paginate"
        >
          {number}
        </button>
      )) : ""}
    
    </div>
  );
};

export default Pagination;