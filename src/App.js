import React from 'react';

import Task from './components/TodoComponents/Todo';
import ToDo from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      toDolists: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false,
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false,
        },
      ]

    }
  }
changeHandler = event =>{
  this.setState({ [event.target.name]: event.target.value});
};


addNewTask = event =>{
  event.preventDefault();
  this.setState({
    toDolists: [
      ...this.state.toDolists,
      {task: this.state.newTask}
    ],
    newTask:''
  });
};


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='App'>

      {/* <ToDo 
      toDolists= {this.state.toDolists} 
      /> */}
      <Task
      toDolists= {this.state.toDolists}
      />
      <TodoForm
      changeHandler={this.changeHandler}
      addNewTask={this.addNewTask}
      />
      </div>
    );
  }
}

export default App;
