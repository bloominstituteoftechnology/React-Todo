import React from "react";
import Todo from "./Todo";
const TodoList = (props) => {
  const { item, completeItem, clearItem } = props;

  const clearCompleted = () => {
    clearItem();
  };

  return (
    <div>
      {item.map((item, ind) => {
        return <Todo list={item} key={ind} completeItem={completeItem} />;
      })}
      <button onClick={clearCompleted}>Clear Completed Items</button>
    </div>
  );
};

export default TodoList;
