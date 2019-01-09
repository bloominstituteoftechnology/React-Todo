import React from 'react';

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
    switch (newState.todoItems[key].state) {
      case "active":
        newState.todoItems[key].state = "complete";
        break;
      case "complete":
        newState.todoItems[key].state = "cancelled";
        break;
      case "cancelled":
        newState.todoItems[key].state = "active";
        break;
      default:
        console.log(`toggleTodo(${key}): This todo item has an invalid state. Setting to active.`);
        newState.todoItems[key].state = "active";
        break;
    }

    this.setState(newState);
  }

  deleteTodo(key) {
    if (!this.state.todoItems[key]) {
      console.log(`deleteTodo(${key}): This todo item doesn't exist.`);
      return;
    }

    let newState = this.state;
    newState.todoItems.splice(key, 1);
    this.setState(newState);
  }

  submitTodo(todoObject) {
    todoObject.date = new Date();
    todoObject.state = "active";

    let newState = this.state;
    newState.todoItems.push(todoObject);
    this.setState(newState);
  }

  render() {
    return (
      <div className="todolistapp">
        <h2>API Functional... UI not functional</h2>
        {this.state.todoItems.map((item, index)=> {
          return (
            <div className="todolistapp-item">
              <p>{`${index}: ${item.name} - ${item.date}`}</p>
              <p>{`${item.description} - ${item.state}`}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TodoListApp;
