import { Link } from "react-router-dom";
import React from "react";

const ProductDescription = (props) => {
  const handleAddToCartClick = () => {
    // Open the Cart modal
    props.setModalOpen(true);
    // Increment the quantity of the selected product
    const newArray = props.products.map((object, i) => {
      if (props.product.id === object.id) {
        return { ...object, quantity: object.quantity + 1 };
      }
      return object;
    });
    props.setProducts(newArray);
  };

  return (
    <div className="product-description-container">
      <div className="product-description-info-container">
        <h1 className="product-description-info-title">{props.product.name}</h1>
        <p className="product-description-paragraph">
          {props.product.description}
        </p>
        <p className="product-description-price">A${props.product.price}.00</p>
      </div>
      <div className="product-description-button-container">
        <button className="add-to-bag-button" onClick={handleAddToCartClick}>
          ADD TO CART
        </button>
        <button className="buy-it-now-button" onClick={handleAddToCartClick}>
          BUY IT NOW
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;
