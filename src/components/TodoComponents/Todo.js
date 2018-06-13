import React from 'react';
import TodoList from './TodoList.js'
// import TodoForm from './TodoForm.js'

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: [],
      item: ""
    }
  }

  addTodo = event => {
    this.setState({item: event.target.value});
  };

  addItem = event => {
    const todo = this.state.todo.slice();
    todo.push(this.state.item);
    this.setState({todo: todo, item: ""})
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.addTodo}
          placeholder="enter todo"
          value={this.state.item}
        />
        <button onClick={this.addItem}>Submit</button>
        <TodoList todo={this.state.todo} />
      </div>
    );
  }
}

export default Todo;
