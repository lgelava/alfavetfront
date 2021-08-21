import React from "react";
import { Link } from "react-router-dom";
import PhoneIcon from "@material-ui/icons/Phone";

const Navbar = () => {
  return (
    <nav>
      <Link className="nav_link" to="#">
        სერვისები
      </Link>
      <Link className="nav_link" to="#">
        ჩვენ შესახებ
      </Link>
      <Link className="nav_link" to="/products_page">
        პროდუქცია
      </Link>
      <Link className="nav_link" to="/blog">
        ბლოგი
      </Link>
      <a className="nav_link contact_btn" href="tel:+995579998282">
        <PhoneIcon className="phone_icon" />
        +995 579 99 82 82
      </a>
    </nav>
  );
};

export default Navbar;
