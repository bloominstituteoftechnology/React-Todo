import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoTasks: [
        {
          task: "wake up",   // the todo title that will be shown to the user.
          id: "1",  // a unique Time Stamp that will be assigned by Date.now().
          completed: "false" //field should default to false and will be the field that we toggle when we complete a todo
        }, 

        {
          task: "jog",   
          id: "2",  
          completed: "false" 
        },

        {
          task: "eat",   
          id: "3",  
          completed: "false" 
        },
      ],
      todoTask: ""
    }
  }

  addTodoTask = () => {
    const todoTasks = this.state.todoTasks.slice();
    todoTasks.push(this.state.todoTask);
    this.setState({todoTasks: todoTasks, todoTask: ""})
  };

  changeAddTodoHandler = event => {
    console.log(event.target.value);
    this.setState({todoTask: event.target.value});
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
          activeValue = {this.state.todoTask}
        />
        
        <h2> List of Todo Tasks </h2>
       
        <TodoList 
          currentList = {this.state.todoTasks}
        />
      </div>
    );
  }
}

export default App;