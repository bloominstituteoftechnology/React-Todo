import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
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
      inputTask: ''
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
        {task: this.state.inputTask}
      ],
      inputTask:''
    });
  };

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <TodoForm
          addTask={this.addTask}
          inputTask={this.state.inputTask}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
