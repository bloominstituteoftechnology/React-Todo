import React from "react";

import Item from "./Item";

const GroceryList = (props) => {
  // for sorting the list based on whether an item has been purchased or not
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="shopping-list">
      {props.groceries.map((item) => (
        <Item
          key={item.id}
          item={item}
          togglePurchased={props.togglePurchased}
        />
      ))}
      <button className="clear-btn" onClick={props.clearPurchased}>
        Clear Purchased
      </button>
    </div>
  );
};

export default GroceryList;
