import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css'

const tasks =[
  {
    name: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    name: 'Do grocery shopping',
    id: 1528817084348,
    completed: false
  },
  {
    name: 'Wash Car',
    id: 15288170444358,
    completed: false
  }
];
class App extends React.Component {
  constructor(props){
    super();
    this.state={
      tasksList:tasks
    };
  }
  addNewTask = newTaskName =>{
    const newState = {
      ...this.state,
      tasksList:[
        ...this.state.tasksList,
        {name:newTaskName, completed:false, id:Date.now()}
      ]
    };
    this.setState(newState);
  };

  toggleDone = id =>{
    const newState = {
      ...this.state,
      tasksList: this.state.tasksList.map(task =>{
        if(task.id === id){
          return{
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    };
    this.setState(newState);
  };

  clearTask = () => {
    const newState = {
      ...this.state,
      tasksList: this.state.tasksList.filter(item => {
        return !item.completed; 
      })
    };
    this.setState(newState);
  };


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
       <TodoList 
       tasks={this.state.tasksList}
       toggleDone={this.toggleDone}
       clearTask={this.clearTask}
       />
       <TodoForm addNewTask={this.addNewTask}/>
      </div>
    );
  }
}

export default App;
