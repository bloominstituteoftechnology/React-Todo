import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm"
import TodoList from "./components/TodoComponents/TodoList"

import "./components/TodoComponents/Todo.css"


const todoData = [
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

  constructor(){
    super();
    this.state={
      todo: todoData
  }
}

  addItem = (event, item) => {
    event.preventDefault();
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todo:[...this.state.todo, newItem]
    })
  }

  toggleItem = id => {
    console.log(id)
    this.setState({
      todo: this.state.todo.map(item => {
        if(item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
       
        <TodoList 
          todo={this.state.todo}
          toggleItem={this.toggleItem} 
        />
        <TodoForm addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
