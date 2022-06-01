import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Cart from "../Cart/Cart";

const Header = (props) => {
  return (
    <div className="header-container">
      <Link className="header-home-link" to="/">
        <h1 className="header-title">Apple iPhone</h1>
      </Link>

      <div className="header-links-container">
        <Link className="shop-link" to="/catalog">
          <Button>Shop</Button>
        </Link>

        <Cart
          modalOpen={props.modalOpen}
          setModalOpen={props.setModalOpen}
          products={props.products}
          setProducts={props.setProducts}
          totalPrice={props.totalPrice}
        />
      </div>
    </div>
  );
};

export default Header;
