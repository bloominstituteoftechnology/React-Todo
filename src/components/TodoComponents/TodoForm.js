import React from "react";

const TodoForm = props => {
  return (
    <form onSubmit={props.addItem}>
      <input
        type="text"
        name="itemText"
        value={props.name}
        onChange={props.onChangeEvent}
      />
      <button type="submit">Add Item</button>
      <div onClick={props.deleteItem}>Delete Items</div>
    </form>
  );
};

export default TodoForm;
