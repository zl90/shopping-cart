import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { getThemeProps } from "@mui/system";

const Home = (props) => {
  const handleAddToCartClick = () => {
    // Open the Cart modal
    props.setModalOpen(true);
    // Increment the quantity of the selected product
    const newArray = props.products.map((object, i) => {
      if (object.id === "i13pro") {
        return { ...object, quantity: object.quantity + 1 };
      }
      return object;
    });
    props.setProducts(newArray);
  };

  return (
    <div className="home-content-container">
      <Header
        modalOpen={props.modalOpen}
        setModalOpen={props.setModalOpen}
        products={props.products}
        setProducts={props.setProducts}
        totalPrice={props.totalPrice}
        totalItems={props.totalItems}
      />
      <h3>iPhone 13 Pro</h3>
      <h1>Oh. So. Pro.</h1>
      <p>From A$1,699 before trade-in.</p>
      <button className="home-buy-now-button" onClick={handleAddToCartClick}>
        Buy Now
      </button>
      <Link className="content-link" to={"/products:i13pro"}>
        Learn more {">"}
      </Link>
    </div>
  );
};

export default Home;
