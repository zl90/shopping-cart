import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import ProductDescription from "./ProductDescription/ProductDescription";
import { useEffect, useState } from "react";

const ProductInfo = (props) => {
  // Get the product ID from the URL parameters (react router)
  const { id } = useParams();
  const [product, setProduct] = useState({});

  // Use the ID from the URL to search for the corresponding product
  const getProductFromID = (idToQuery) => {
    setProduct(
      props.products.filter((object) => {
        if (object.id === idToQuery) {
          return object;
        }
      })[0]
    );
  };

  useEffect(() => {
    getProductFromID(id.slice(1, id.length));
  }, []);

  return (
    <div className="product-info-container">
      <Header
        modalOpen={props.modalOpen}
        setModalOpen={props.setModalOpen}
        products={props.products}
        setProducts={props.setProducts}
        totalPrice={props.totalPrice}
        totalItems={props.totalItems}
      />
      <div className="product-info-layout">
        <div className="product-info-title-container">
          <h1>{product.name}</h1>
          <p>{product.slogan}</p>
        </div>
        <div
          className="product-info-image-container"
          style={{
            background: `url(${product.image})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* <img
            alt={product.name}
            src={product.image}
            className="product-info-image"
          /> */}
        </div>
        <ProductDescription
          product={product}
          modalOpen={props.modalOpen}
          setModalOpen={props.setModalOpen}
          products={props.products}
          setProducts={props.setProducts}
        />
      </div>
    </div>
  );
};

export default ProductInfo;
