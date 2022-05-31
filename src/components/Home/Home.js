import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { getThemeProps } from "@mui/system";

const Home = (props) => {
  return (
    <div className="home-content-container">
      <Header modalOpen={props.modalOpen} setModalOpen={props.setModalOpen} />
      <h3>iPhone 13 Pro</h3>
      <h1>Oh. So. Pro.</h1>
      <p>From A$1,699 before trade-in.</p>
      <button>Buy Now</button>
      <Link className="content-link" to={"/products:74567"}>
        Learn more {">"}
      </Link>
    </div>
  );
};

export default Home;
