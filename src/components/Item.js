import React, { useState } from "react";

const Item = ({ name, category }) => {

  const [isInCart, setisInCart] = useState(false);

  const handleAddToCartClick = () => {
    setisInCart((isInCart) => !isInCart); // when clicked, isInCart = true
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove" : "add"} onClick={handleAddToCartClick}> {isInCart ? "Remove From" : "Add To"} Cart</button>
    </li>
  );
}

export default Item;
