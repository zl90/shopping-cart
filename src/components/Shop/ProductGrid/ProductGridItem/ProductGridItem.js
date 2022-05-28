import { Link } from "react-router-dom";

const ProductGridItem = () => {
  return (
    <Link to="/products:3456" className="product-grid-item-container">
      <img
        className="product-grid-item-image"
        alt="a product item, update this description later"
        src="#"
      />
      <h2 className="product-grid-item-title">product title</h2>
      <p className="product-grid-item-price">$1999.00</p>
    </Link>
  );
};

export default ProductGridItem;
