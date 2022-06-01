import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import ProductInfo from "./ProductInfo/ProductInfo";
import "../index.css";
import { useEffect, useState } from "react";
import uniqid from "uniqid";
import iPhone13ProMaxImage from "../images/iphone-13-pro-max.jpeg";
import iPhone13ProImage from "../images/iphone-13-pro.jpeg";
import iPhone12Image from "../images/iphone-12.jpeg";
import iPhone12MiniImage from "../images/iphone-12-mini.jpeg";
import iPhone11Image from "../images/iphone-11.jpeg";
import iPhoneSEImage from "../images/iphone-SE.jpeg";

const RouterSwitch = () => {
  const [totalItems, setTotalItems] = useState(0); // Total number of items in the cart
  const [totalPrice, setTotalPrice] = useState(0); // Total price of all items in the cart
  const [modalOpen, setModalOpen] = useState(false); // Modal open/close state
  const [products, setProducts] = useState([
    {
      name: 'iPhone 13 Pro Max 6.7"',
      slogan: "The ultimate iPhone experience",
      description:
        "Our Pro camera system gets its biggest upgrade ever, coupled with industry-leading battery life. It'll change the way you shoot.",
      image: iPhone13ProMaxImage,
      price: 1849,
      category: "iPhone 13",
      quantity: 0,
      id: "i13promax",
    },
    {
      name: 'iPhone 13 Pro 6.1"',
      slogan: "Get A$120 - A$890 off when you trade in an iPhone 8 or newer*",
      description:
        "Our Pro camera system gets its biggest upgrade ever. It'll change the way you shoot.",
      image: iPhone13ProImage,
      price: 1699,
      category: "iPhone 13",
      quantity: 0,
      id: "i13pro",
    },
    {
      name: 'iPhone 12 6.1"',
      slogan: "Get A$120 - A$890 off when you trade in an iPhone 8 or newer*",
      description:
        "Our Pro camera system gets its biggest upgrade ever. It'll change the way you shoot.",
      image: iPhone12Image,
      price: 1199,
      category: "iPhone 12",
      quantity: 0,
      id: "i12",
    },
    {
      name: 'iPhone 12 Mini 5.4"',
      slogan: "Get A$120 - A$890 off when you trade in an iPhone 8 or newer*",
      description:
        "Our Pro camera system gets its biggest upgrade ever. It'll change the way you shoot.",
      image: iPhone12MiniImage,
      price: 999,
      category: "iPhone 12",
      quantity: 0,
      id: "i12mini",
    },
    {
      name: 'iPhone 11 6.1"',
      slogan: "Get A$120 - A$890 off when you trade in an iPhone 8 or newer*",
      description:
        "Our Pro camera system gets its biggest upgrade ever. It'll change the way you shoot.",
      image: iPhone11Image,
      price: 849,
      category: "iPhone 11",
      quantity: 0,
      id: "i11",
    },
    {
      name: 'iPhone SE 6.1"',
      slogan: "Get A$120 - A$890 off when you trade in an iPhone 8 or newer*",
      description:
        "Our Pro camera system gets its biggest upgrade ever. It'll change the way you shoot.",
      image: iPhoneSEImage,
      price: 719,
      category: "iPhone SE",
      quantity: 0,
      id: "iSE",
    },
  ]);

  useEffect(() => {
    // Update the total price whenever anything changes in the product array
    const priceCount = products.reduce((previous, current) => {
      return (
        Number(current.price) * Number(current.quantity) + Number(previous)
      );
    }, 0);
    setTotalPrice(priceCount);

    const itemsCount = products.reduce((previous, current) => {
      return Number(current.quantity) + Number(previous);
    }, 0);
    setTotalItems(itemsCount);
  }, [products]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              setProducts={setProducts}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              totalPrice={totalPrice}
              totalItems={totalItems}
            />
          }
        />
        <Route
          path="/catalog"
          element={
            <Shop
              products={products}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              totalPrice={totalPrice}
              totalItems={totalItems}
            />
          }
        />
        {/* Look up how to handle product IDs */}
        <Route
          path="/products:id"
          element={
            <ProductInfo
              products={products}
              setProducts={setProducts}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              totalPrice={totalPrice}
              totalItems={totalItems}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterSwitch;
