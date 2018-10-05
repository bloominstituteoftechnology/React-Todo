import React from 'react';

import './app.css';
import Task from './components/TodoComponents/TodoList';
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
        }
      ],

    newTask:'',
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
      { task: this.state.newTask }
    ],
    newTask:''
  });
};

taskCompleted = index=> {
  this.setState({
    toDolists: this.state.toDolists.map((task, idx) => {
      if (index !== idx){
        return task;
      }else {
        return {
          ...task,
          completed: task.completed === false ? true : false
        };
      }
    })
  });
};


removeTask = event =>{
  // index.preventDefault();
  this.setState({
    toDolists: this.state.toDolists.filter((task, idx) =>
    {(event !==idx)}

    
//       return task;
//     }else{
//       return null;
//     }
// })
    )}
  )
  ;};





  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='App'>

      
      <Task
      toDolists= {this.state.toDolists}
      taskCompleted= {this.taskCompleted}

      />
      <TodoForm
      changeHandler={this.changeHandler}
      addNewTask={this.addNewTask}
      newTask={this.state.newTask}
      removeTask={this.removeTask}
      />
      </div>
    );
  }
}

export default App;
