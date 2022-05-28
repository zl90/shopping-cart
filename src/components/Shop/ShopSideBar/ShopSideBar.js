import { Button } from "@mui/material";

const ShopSideBar = (props) => {
  return (
    <div className="shop-sidebar-container">
      <div className="current-filter-title-container">
        <p>Shop /</p>
        <h1>{props.currentFilter}</h1>
      </div>
      <div className="filter-list-container">
        <Button className="filter-button">iPhone 13</Button>
        <Button className="filter-button">iPhone 12</Button>
        <Button className="filter-button">iPhone 11</Button>
        <Button className="filter-button">iPhone 10</Button>
      </div>
    </div>
  );
};

export default ShopSideBar;
