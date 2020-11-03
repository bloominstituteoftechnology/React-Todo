//importing react and forms
import React, { Component } from "react"
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"

//add data
const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }

  //toggleCompleted
  toggleCompleted = (itemId) => {
    console.log("KM: Apps.js: App: togglePurchased: itemId: ", itemId)

    this.setState({
      ...this.state,
      tasks: this.state.tasks.map((item)=>{
        if(item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

  //adding item

  addItem = (itemName) => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {task: itemName, id: Date.now(), completed:false}
      ]
    })
  }

  //clearCompleted
  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter((item) => !item.completed)
    })
  }

  render() {
    return (
      <div>
        <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        
      </div>
        <TodoList 
          tasks={this.state.tasks}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
//comment