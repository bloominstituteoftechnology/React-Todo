import React from 'react';
import ReactDOM from "react-dom";

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo.css';

const tasks = [
  {
    task: 'Wake Up';
    id: 1
    completed: false;
  }
  {
    task: 'Kiss Nena';
    id: 2
    completed: false;
  }
  {
    task: 'Apply for that job';
    id: 3
    completed: false;
  }
  {
    task: 'Feed the dogs';
    id: 4
    completed: false;
  }
  {
    task: 'Cook dinner';
    id: 5
    completed: false;
  }
]



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks // same as tasks: tasks
    };
  }

  toggleItem = toggleId => {
    console.log(itemId);

    this.setState({
      //building a new state object each time
      tasks: this.state.tasks.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });

  };

  //class method to add a grocery item


  render() {
    return (
      <div>
        <h2>To-Do List: MVP</h2>
      </div>
    );
  }
}

export default App;
