import React from "react";

export default class TodoForm extends React.Component {
  render() {
    const { addItem, deleteItem, todo, todoOnChange } = this.props;
    return (
      <div className="header">
        <form onSubmit={addItem}>
          <input
            name="todo"
            value={todo}
            onChange={todoOnChange}
            placeholder="enter task"
          ></input>
          <button type="submit">add</button>
          <button onClick={deleteItem} type="button">
            Delete
          </button>
        </form>
      </div>
    );
  }
}
