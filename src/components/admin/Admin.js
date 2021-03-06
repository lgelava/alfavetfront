import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import "./Admin.css";
const Admin = () => {
  return (
    <div className="container">
      <Header />
      <h2>Admin</h2>
      <Link to="/admin/blog" style={{ fontSize: "24px" }}>
        ბლოგი
      </Link>
      <Link to="/admin/shop" style={{ fontSize: "24px" }}>
        პროდუქცია
      </Link>
    </div>
  );
};

export default Admin;
