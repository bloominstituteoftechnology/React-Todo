import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './components/TodoComponents/Todo.css'
// import ToDo from './components/TodoComponents/ToDo';
// import ToDoForm from './components/TodoComponents/ToDoForm';
// import ToDoList from './components/TodoComponents/ToDoList';

// //exampleArray = [
//   {
//     task: 'Organize Garage',
//     id: 1528817077286,
//     completed: false
//   },
//   {
//     task: 'Bake Cookies',
//     id: 1528817084358,
//     completed: false
//   }
// ];
const newArray =[];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todos: newArray,
      inputTask: '',
    };
  }

  handleChange = event =>{
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addTask = ev => {
    console.log('button clicked');
    ev.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {task: this.state.inputTask, id: Date.now(), completed: 'false'}
      ],
      inputTask:''
    });
    console.log({task: this.state.inputTask, id: Date.now(), completed: 'false'})
  };

  toggleComplete = id =>{
    console.log('is my function working')
     this.setState({
       todos:
           this.state.todos.map(todo => {
           if(todo.id === id){
             return {
               ...todo,
               completed: todo.completed === 'false' ? 'true' : 'false'};
           }else{
             return todo;
           }
         })
     })
  };

  clearCompleted = ev => {
    ev.preventDefault();
    this.setState({
      todos: this.state.todos.filter(
        todo => todo.completed === 'false'
      )
    });
  };

  render() {
    return (
      <div>
        <TodoList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
        />
        <TodoForm
          clearCompleted={this.clearCompleted}
          addTask={this.addTask}
          inputTask={this.state.inputTask}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
