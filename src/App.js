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
          task: "example task",   // the todo title that will be shown to the user.
          id: "1",  // a unique Time Stamp that will be assigned by Date.now().
          completed: "false" //field should default to false and will be the field that we toggle when we complete a todo
        }, 
      ],

      todoTaskEntry: ""
    }
  }


  addTodoTask = (e) => {
    e.preventDefault();
    const todoTasks = this.state.todoTasks.slice(); 
    const newTodoTask = {
      task: this.state.todoTaskEntry, 
      id: Date.now(), 
      completed: "false"
    }
    todoTasks.push(newTodoTask); 
    this.setState({todoTasks: todoTasks, todoTaskEntry: ""});
  }

  addTodoHandler = event => {
    console.log(event.target.value); 
    this.setState({todoTaskEntry:event.target.value});
  };


// toggleCompleted = id => {
//   let markedTodoTasks = this.state.todoTasks.slice(); 
//   markedTodoTasks = markedTodoTasks.map(task => { 
//     if (task.id === id) { 
//        task.completed = !task.completed;
//        return task;
//     }
//     else {
//       return task; 
//     }
//   });
//   this.setState({todoTasks: markedTodoTasks});
// };


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
          todoTaskEntry = {this.state.todoTaskEntry}
          addTodoHandler = {this.addTodoHandler}
          addTodoTask = {this.addTodoTask}
        />
        
        <h2> List of Todo Tasks </h2>
       
        <TodoList 
          onClickToggleCompleted = {this.toggleCompleted}
          todoTasks = {this.state.todoTasks}
        />
      </div>
    );
  }
}

export default App;