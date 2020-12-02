import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const todoS = [
  {
    task: 'Shower',
    id: 730,
    completed: false,
  },{
    task: 'Attend Lecture',
    id: 800,
    completed: false,
  },{
    task: 'Make Lunch',
    id: 1100,
    completed: false,
  },{
    task: 'Tidy Home',
    id: 1200,
    completed: false,
  },{
    task: 'Homework',
    id: 1400,
    completed: false,
  },{
    task: 'Homework Submission',
    id: 1700,
    completed: false,
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
      this.state = {
        todoS: todoS
      }
  }

  handleToggle = (itemId) => {
    this.setState({
      todoS: this.state.todoS.map(item => {
        if (itemId === item.id) {
          return ({
            ...item,
            completed: !item.completed
          });
        }else {
          return(item);
        }
      })
    });
  }

  handleAdd = task => {
    this.setState({
      todoS: [...this.state.todoS, {
        task: task, 
        id: Math.random(),
        completed: false,
      }]
    });
  }

  handleCompleted = () => {
    this.setState({
      todoS: this.state.todoS.filter(item => (!item.completed))
    });
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>Welcome to your Todo App!</h2>
        </div>
        <TodoForm handleAdd={this.handleAdd}/>
        <TodoList handleCompleted={this.handleCompleted} todoS={this.state.todoS} handleToggle={this.handleToggle}/>
      </div>
    );
  }
}

export default App;
