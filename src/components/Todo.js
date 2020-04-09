import React from "react";
import { List } from "semantic-ui-react";

const Todo = props => {
  return (
    <List size="big">
      <List.Item
        className={`${props.item.purchased ? "inCart" : ""}`}
        onClick={() => {
          props.toggleItem(props.item.itemID);
        }}
      >
        {props.item.name}
      </List.Item>
    </List>
  );
};

export default Todo;
