import React from 'react';

import TodoForm from "./components/TodoForm"; 
import TodoList from "./components/TodoList"; 



const chores = [
  {
    task: 'Cook Chicken', 
    id: 36, 
    completed: false,
  }, 
  {
    task: 'order take-out', 
    id: 52, 
    completed: false, 
  }
]; 


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super(); 
    this.state = ({
      toDo: chores
    }); 
  }; 

  toggleChores = choreId => {
    this.setState({
      toDo: this.state.toDo.map(chore => {
        if (choreId === chore.id) {
          return {
            ...chore,
            completed: !chore.completed
          }; // closes return 

        }// closes if

        return chore; 

      })// closes map

    })// closes setState
  }; 
  

  handleSubmit = chore => {
    const obj = {
      task: chore, 
      id: Date.now(), 
      completed: false, 
    }; 

    this.setState({
      toDo: [...this.state.toDo, obj]
    }); 

  }; 

  clearComplete = () => {
    this.setState({
    toDo: this.state.toDo.filter(task => {
    return !task.completed;
    })
    });
    };

  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <div>
          <h1>ToDo List</h1>
          <TodoForm
          handleSubmit={this.handleSubmit}
          />
        </div>
        <TodoList
        chores={this.state.toDo}
        toggleChores={this.toggleChores}
        clearComplete={this.clearComplete}
        />

      </div>
    );
  }
}

export default App;
