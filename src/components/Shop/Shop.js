import { useSearchParams } from "react-router-dom";
import Header from "../Header/Header";
import ProductGrid from "./ProductGrid/ProductGrid";
import ShopSideBar from "./ShopSideBar/ShopSideBar";
import { useState } from "react";

const Shop = (props) => {
  const [currentFilter, setCurrentFilter] = useState("All");

  return (
    <div className="shop-container">
      <Header
        modalOpen={props.modalOpen}
        setModalOpen={props.setModalOpen}
        products={props.products}
        setProducts={props.setProducts}
        totalPrice={props.totalPrice}
      />
      <div className="shop-content-container">
        <ShopSideBar
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
        ></ShopSideBar>
        <ProductGrid
          products={props.products}
          currentFilter={currentFilter}
        ></ProductGrid>
      </div>
    </div>
  );
};

export default Shop;
