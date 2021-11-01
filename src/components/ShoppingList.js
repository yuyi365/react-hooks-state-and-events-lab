import React, { useState } from "react";
import Item from "./Item";

const ShoppingList = ({ items }) => {

  const [selectedCategory, setselectedCategory] = useState("All");

  // value selected by the user
  const handleCategoryChange = (event) => {
    setselectedCategory(event.target.value);
  }

  // filter the items to only display items based on selected category
  const itemsToDisplay = items.filter((item) => {
    if (setselectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
