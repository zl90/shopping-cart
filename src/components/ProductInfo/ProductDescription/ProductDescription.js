import { Link } from "react-router-dom";

const ProductDescription = (props) => {
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
        <button className="add-to-bag-button">ADD TO BAG</button>
        <button className="buy-it-now-button">BUY IT NOW</button>
      </div>
    </div>
  );
};

export default ProductDescription;
