import Header from "../Header/Header";
import ProductGrid from "./ProductGrid/ProductGrid";
import ShopSideBar from "./ShopSideBar/ShopSideBar";

const Shop = () => {
  return (
    <div className="shop-container">
      <Header />
      <div className="shop-content-container">
        <ShopSideBar></ShopSideBar>
        <ProductGrid></ProductGrid>
      </div>
    </div>
  );
};

export default Shop;
