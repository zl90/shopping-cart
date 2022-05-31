import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import ShoppingBag from "@mui/icons-material/ShoppingBag";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import VolumeUp from "@mui/icons-material/VolumeUp";
import "./Cart.css";

const style = {
  position: "absolute",
  top: "0%",
  right: "0%",
  width: 400,
  height: "100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Cart(props) {
  const handleOpen = () => props.setOpen(true);
  const handleClose = () => props.setOpen(false);

  return (
    <div>
      <IconButton aria-label="open-modal" onClick={handleOpen}>
        <ShoppingBag />
      </IconButton>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="cart-container">
          <div className="close-modal-button-container">
            <button>X</button>
          </div>
          <div className="modal-title">Cart</div>
          <div className="cart-item-list">
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <div className="modal-total-price">Total: $1999.00</div>
          <div className="modal-checkout-button-container">
            <button>CHECKOUT</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

const Input = styled(MuiInput)`
  width: 42px;
`;

const CartItem = () => {
  return (
    <div className="cart-item-container">
      <div className="cart-item-left">
        <img alt="product" src="#"></img>
      </div>
      <div className="cart-item-right">
        <h2 className="cart-item-title">Product Name goes here</h2>
        <InputSlider></InputSlider>
        <div className="cart-item-total-price">$1299.00</div>
      </div>
    </div>
  );
};

function InputSlider() {
  const [value, setValue] = React.useState(1);

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <div className="volume-input-container">
      <Typography className="volume-input-title" id="input-slider" gutterBottom>
        Amount
      </Typography>
      <Input
        className="volume-input-selector"
        value={value}
        size="small"
        onChange={handleInputChange}
        onBlur={handleBlur}
        inputProps={{
          step: 1,
          min: 1,
          max: 100,
          type: "number",
          "aria-labelledby": "input-slider",
        }}
      />
    </div>
  );
}

export default Cart;
