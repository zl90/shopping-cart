import * as React from "react";
import IconButton from "@mui/material/IconButton";
import ShoppingBag from "@mui/icons-material/ShoppingBag";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <Link className="header-home-link" to="/">
        <h1 className="header-title">Apple iPhone</h1>
      </Link>

      <div className="header-links-container">
        <Link className="header-link" to="/catalog">
          Shop
        </Link>
        <IconButton aria-label="delete">
          <ShoppingBag />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
