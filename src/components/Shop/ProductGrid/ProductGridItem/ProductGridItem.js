import { Link } from "react-router-dom";

const ProductGridItem = (props) => {
  return (
    <Link
      to={`/products:${props.product.id}`}
      className="product-grid-item-container"
    >
      <img
        className="product-grid-item-image"
        alt={props.product.name}
        src={props.product.image}
      />
      <h2 className="product-grid-item-title">{props.product.name}</h2>
      <p className="product-grid-item-price">
        {"$" + props.product.price.toFixed(2)}
      </p>
    </Link>
  );
};

export default ProductGridItem;
