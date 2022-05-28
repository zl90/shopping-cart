import * as React from "react";
import IconButton from "@mui/material/IconButton";
import ShoppingBag from "@mui/icons-material/ShoppingBag";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <div className="header-container">
      <Link className="header-home-link" to="/">
        <h1 className="header-title">Apple iPhone</h1>
      </Link>

      <div className="header-links-container">
        <Link className="shop-link" to="/catalog">
          <Button>Shop</Button>
        </Link>
        <IconButton aria-label="delete">
          <ShoppingBag />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
