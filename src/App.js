import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todo: [{
        task: "",
        id: Date.now(),
        completed: false
      }]
    };
  }

  addItem = listItem => {
    console.log("add item: ", listItem);

    this.setState({
      todo: [
        ...this.state.todo,
        {
          task: listItem,
          id: Date.now(),
          completed: true
        }
      ]
    });
    
  }
  
  toggleCompleted = listItemId => {
    this.setState( {
      todo: this.state.todo.map(listItem => {
        if (listItem.id === listItemId) {
          return {
            ...listItem,
            completed: !listItem.completed
          };
        }
        return listItem
      })
    });
  }

  clearCompleted = () => {
    console.log("clearCompleted");
    this.setState({
      todo: this.state.todo.filter(listItem => {
        return !listItem.completed;
      })
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} clearCompleted={this.clearCompleted} />
        <TodoList todo={this.state.todo} toggleCompleted={this.toggleCompleted} />
      </div>
    );
  }
}

export default App;