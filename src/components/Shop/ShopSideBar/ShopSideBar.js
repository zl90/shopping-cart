import { Button } from "@mui/material";

const ShopSideBar = (props) => {
  return (
    <div className="shop-sidebar-container">
      <div className="current-filter-title-container">
        <p>Shop /</p>
        <h1>{props.currentFilter}</h1>
      </div>
      <div className="filter-list-container">
        <Button
          className="filter-button"
          onClick={() => props.setCurrentFilter("All")}
        >
          All iPhones
        </Button>
        <Button
          className="filter-button"
          onClick={() => props.setCurrentFilter("iPhone 13")}
        >
          iPhone 13
        </Button>
        <Button
          className="filter-button"
          onClick={() => props.setCurrentFilter("iPhone 12")}
        >
          iPhone 12
        </Button>
        <Button
          className="filter-button"
          onClick={() => props.setCurrentFilter("iPhone 11")}
        >
          iPhone 11
        </Button>
        <Button
          className="filter-button"
          onClick={() => props.setCurrentFilter("iPhone SE")}
        >
          iPhone SE
        </Button>
      </div>
    </div>
  );
};

export default ShopSideBar;
