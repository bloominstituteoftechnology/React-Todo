import React from "react";


import DeleteButton from "./components/TodoComponents/DeleteButton";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor() {
    // you will need a place to store your state in this component.
    super();
    this.state = {
      todoList: []
    };
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  toggleItem = id => {
    // find the item we clicked on
    // toggle the purchased field
    // update state with the new grocery data
    const newTodoList = this.state.todoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item
      }
    });
      // update groceryList
    this.setState({
      todoList: newTodoList
    });
  };
  
  addItem = itemName => {
    const newItem = {
      name: itemName, 
      id: Date.now(),
      completed: false  
    };
    this.setState({
      todoList: [...this.state.todoList, newItem]
    })
    console.log(this.state.todoList)
  }

  handleDelete = () => {
    this.setState({
      todoList: this.state.todoList.filter(item => {
        return !item.completed
      })
    })
  }
 
  render() {
    console.log('rendering')
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoList={this.state.todoList} toggleItem={this.toggleItem}/>
        <TodoForm addItem={this.addItem}/>
        <DeleteButton handleDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default App;
