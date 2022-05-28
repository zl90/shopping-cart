import { Link } from "react-router-dom";

const ProductDescription = (props) => {
  return (
    <div className="product-description-container">
      <div className="product-description-info-container">
        <h1 className="product-description-info-title">iPhone 13 Pro 11"</h1>
        <p className="product-description-paragraph">
          Our Pro camera system gets its biggest upgrade ever. With next-level
          hardware that captures so much more detail. Superintelligent software
          for new photo and filmmaking techniques. And a mind-blowingly fast
          chip that makes it all possible. It’ll change the way you shoot.
        </p>
        <p className="product-description-price">A$1999</p>
      </div>
      <div className="product-description-button-container">
        <button className="add-to-bag-button">ADD TO BAG</button>
        <button className="buy-it-now-button">BUY IT NOW</button>
      </div>
    </div>
  );
};

export default ProductDescription;
