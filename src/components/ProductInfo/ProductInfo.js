import Header from "../Header/Header";
import ProductDescription from "./ProductDescription/ProductDescription";

const ProductInfo = () => {
  return (
    <div className="product-info-container">
      <Header />
      <div className="product-info-layout">
        <div className="product-info-title-container">
          <h1>iPhone 13 Pro</h1>
          <p>A marketing description of the product can go here</p>
        </div>
        <div className="product-info-image">product image goes here</div>
        <ProductDescription></ProductDescription>
      </div>
    </div>
  );
};

export default ProductInfo;
