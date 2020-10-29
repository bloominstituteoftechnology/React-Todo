import React from "react";

import Todo from "./Todo";

const TodoList = (props) => {
  // for sorting the list based on whether an item has been purchased or not
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  
  
  
  
  return (
    <div className="shopping-list">
      {props.todolist.map((item) => (
        <Todo
          key={item.id}
          item={item}
          toggleDone={props.toggleDone}
          clearTodos={props.clearTodos}
        />
      ))}
      <button onClick={props.clearTodos}className="clear-btn" >
          Clear All Finished Todos
        </button>

    </div>
  );
};

export default TodoList;
