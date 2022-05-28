import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import ProductInfo from "./ProductInfo/ProductInfo";
import "../index.css";

const RouterSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Shop />} />
        {/* Look up how to handle product IDs */}
        <Route path="/products:id" element={<ProductInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterSwitch;
