import Header from "../Header/Header";

const Home = () => {
  return (
    <div className="home-content-container">
      <Header />
      <h3>iPhone 13 Pro</h3>
      <h1>Oh. So. Pro.</h1>
      <p>From A$1,699 before trade-in.</p>
      <button>Buy Now</button>
      <a href="#">Learn more {">"}</a>
    </div>
  );
};

export default Home;
