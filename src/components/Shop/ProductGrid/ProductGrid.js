import { useEffect, useState } from "react";
import ProductGridItem from "./ProductGridItem/ProductGridItem";

const ProductGrid = (props) => {
  const [filteredItems, setFilteredItems] = useState(props.products);

  // This filters the shop items based on their category (iPhone13, iPhone12... etc)
  useEffect(() => {
    const newArray = props.products.filter((object) => {
      if (
        object.category === props.currentFilter ||
        props.currentFilter === "All"
      ) {
        return object;
      }
    });
    setFilteredItems(newArray);
  }, [props.currentFilter]);

  return (
    <div className="product-grid-container">
      {filteredItems.map((object) => {
        return <ProductGridItem product={object} key={object.id} />;
      })}
    </div>
  );
};

export default ProductGrid;
