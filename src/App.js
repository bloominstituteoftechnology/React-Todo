import React from 'react';
import TodoList from './components/TodoComponents/TodoList' ;


class App extends React.Component {
  constructor() {
    super() ;
    this.state = {
      tasksList: [
        {
          task: 'Default Task Title 1',
          id: Date.now(),
          completed: false
        },
        {
          task: 'Default Task Title 2',
          id: Date.now() + 1,
          completed: false
        },

      ],

      tasksListNew: ''
    }
    console.log(this.state.tasksList[0].task) ;
  }

  addTask = () => {
    // copying state, as to not mutate state
    const tasksList = this.state.tasksList.slice() ;
    // adding user input to new array, inside state
    tasksList.push(this.state.tasksListNew) ;
    // need clarification on setState syntax
    this.setState({ tasksList: tasksList, band: ''}) ;
  }

  render() {
    console.log('Just Rendered!!') ;
    return(
      
      
      <div>
        <h1>To Do List: MVP</h1>
        
        <TodoList />

        <div className="list-actions-wrapper">
          <input type="text" className="input-box"/>
          <button className="button-todo">button-todo</button>
          <button className="button-clear">button-clear</button>
        </div>
      </div> 
      

    ) 
  } 
} 

export default App ;
      {/* <li>{this.state.tasksList[0].task}</li>          */}
