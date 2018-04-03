import React, { Component } from 'react';

const TodoList = props => {
  return (
    <div>
      <h3 className="typedText">{props.newTodo}</h3>
      {props.todoList.map((item, index) => (
        <div key={item + index} className="itemsList">
          <ul>
            <li className="item" onClick="style.textDecoration: lineThrough">{item}<button className="button">X</button></li>
          </ul>
        </div>
      ))}
    </div>
  );
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: "",
      todoList: []
    };
  }

  handleAddItem = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmitItem = () => {
    const { todoList } = this.state;
    todoList.push(this.state.newTodo);
    this.setState({ todoList, newTodo: "" });
  };

  render() {
    return (
      <div>
        <h2>My Todo List</h2>
        <TodoList {...this.state} />
        <input
          type="text"
          name="newTodo"
          value={this.state.newTodo}
          placeholder="add item"
          onChange={this.handleAddItem}
          className="entryField"
        />
        <button onClick={this.handleSubmitItem} className="entryBtn">Add Item</button>
      </div>

    )
  }
};

export default App;