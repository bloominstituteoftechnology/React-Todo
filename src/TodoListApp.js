import React from 'react';
import TodoListItem from './components/TodoComponents/TodoListItem';
import TodoListItemForm from './components/TodoComponents/TodoListItemForm';

import './TodoListApp.css';

class TodoListApp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      todoItems: [],
    }
  }

  // for testing
  componentDidMount() {
    this.submitTodo({
      name: "Sample Todo Name",
      description: "This is the description of a sample todo item."
    });
  }

  toggleTodo(key) {
    if (!this.state.todoItems[key]) {
      console.log(`toggleTodo(${key}): This todo item doesn't exist.`);
      return;
    }

    let newState = this.state;
    switch (newState.todoItems[key].status) {
      case "active":
        newState.todoItems[key].status = "complete";
        break;
      case "complete":
        newState.todoItems[key].status = "cancelled";
        break;
      case "cancelled":
        newState.todoItems[key].status = "active";
        break;
      default:
        console.log(`toggleTodo(${key}): This todo item has an invalid status. Setting to active.`);
        newState.todoItems[key].status = "active";
        break;
    }

    this.setState(newState);
  }

  deleteTodo(key) {
    if (!this.state.todoItems[key]) {
      console.log(`deleteTodo(${key}): This todo item doesn't exist.`);
      return;
    }

    console.log(`deleteTodo(${key}) was called.`);
    let newState = this.state;
    newState.todoItems.splice(key, 1);
    this.setState(newState);
  }

  submitTodo(todoObject) {
    todoObject.date = new Date();
    todoObject.status = "active";

    let newState = this.state;
    newState.todoItems.push(todoObject);
    this.setState(newState);
  }

  render() {
    return (
      <div className="todolistapp">
        <h2>Functional UI... Styling incomplete.</h2>
        <div className="todolistapp-container">
          {this.state.todoItems.map((item, index) => 
            <TodoListItem onToggle={_ => this.toggleTodo(index)} onDelete={_ => this.deleteTodo(index)} item={item} />
          )}
          <TodoListItemForm onSubmit={(value) => this.submitTodo(value)} />
        </div>
      </div>
    );
  }
}

export default TodoListApp;
