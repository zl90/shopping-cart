import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import ShoppingBag from "@mui/icons-material/ShoppingBag";
import { styled } from "@mui/material/styles";
import MuiInput from "@mui/material/Input";
import "./Cart.css";
import uniqid from "uniqid";

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
  const handleOpen = () => props.setModalOpen(true);
  const handleClose = () => props.setModalOpen(false);

  return (
    <div>
      <IconButton aria-label="open-modal" onClick={handleOpen}>
        <ShoppingBag />
      </IconButton>
      <Modal
        open={props.modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="cart-container">
          <div className="close-modal-button-container">
            <button className="close-modal-button" onClick={handleClose}>
              X
            </button>
          </div>
          <div className="modal-title">Cart</div>
          <div className="cart-item-list">
            {props.products.map((object, i) => {
              if (object.quantity > 0) {
                return (
                  <CartItem
                    setProducts={props.setProducts}
                    products={props.products}
                    product={object}
                    key={object.id + i}
                  />
                );
              } else {
                return <div key={uniqid()}></div>;
              }
            })}
          </div>
          <div className="modal-total-price">Total: ${props.totalPrice}.00</div>
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

const CartItem = (props) => {
  React.useEffect(() => {}, [props]);
  return (
    <div className="cart-item-container">
      <div className="cart-item-left">
        <img
          className="cart-item-image"
          alt="product"
          src={props.product.image}
        ></img>
      </div>
      <div className="cart-item-right">
        <h2 className="cart-item-title">{props.product.name}</h2>
        <InputSlider
          value={props.product.quantity}
          product={props.product}
          setProducts={props.setProducts}
          products={props.products}
        ></InputSlider>
        <div className="cart-item-total-price">
          ${props.product.price * props.product.quantity}.00
        </div>
      </div>
    </div>
  );
};

function InputSlider(props) {
  const [value, setValue] = React.useState(props.value);

  React.useEffect(() => {
    handleBlur();
  }, []);

  const handleInputChange = (event) => {
    // Update the frontend "quantity" value
    setValue(event.target.value === "" ? "" : Number(event.target.value));
    // Then make sure the state reflects that value
    updateStateValue(event.target.value);
  };

  const updateStateValue = (valueToSet) => {
    const newArray = props.products.map((object, i) => {
      if (props.product.id === object.id) {
        return { ...object, quantity: Number(valueToSet) };
      } else {
        return object;
      }
    });
    props.setProducts(newArray);
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
      updateStateValue(0);
    } else if (value > 10) {
      setValue(10);
      updateStateValue(10);
    }
  };

  return (
    <div className="volume-input-container">
      <Typography className="volume-input-title" id="input-slider" gutterBottom>
        Quantity
      </Typography>
      <Input
        className="volume-input-selector"
        value={value}
        size="small"
        onChange={handleInputChange}
        onBlur={handleBlur}
        inputProps={{
          step: 1,
          min: 0,
          max: 10,
          type: "number",
          "aria-labelledby": "input-slider",
        }}
      />
    </div>
  );
}

export default Cart;
