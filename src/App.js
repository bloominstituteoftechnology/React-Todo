import React, { Component } from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const toDoList = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: toDoList,
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  handleItemAdd = (itemName) => {
    const item = {
      task: itemName,
      id: Date.now(),
      completed: false
    };

    const newTasks = [...this.state.list, item];

    this.setState({
      list: newTasks,
    });
  }
  
  handleItemToggle = (itemId)=> {
    this.setState({
      list: this.state.list.map(item=>{
        if(item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return(item);
      })
    });
  }

  handleItemCompleted = () => {
    const newTasks = this.state.task.filter(item => {
      return(!item.completed);
    });
    this.setState({
      groceries: newTasks,
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <TodoForm handleItemAdd={this.handleItemAdd}/>
        </div>
        <TodoList 
          handleItemCompleted={this.handleItemCompleted}
          handleItemToggle={this.handleItemToggle} 
          list={this.state.list}
        />
      </div>
    );
  }
}

export default App;
