import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';
import SearchForm from './components/TodoComponents/SearhForm.js'


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
  constructor(){
    super();
    
    this.state = {
      tasksList: tasks
    }
    //Add new imputs to local storage
    // this.state = {
    //   tasksList : window.localStorage.getItem('tasksList') ? JSON.parse(window.localStorage.getItem('tasksList')) : tasks
    // };
  }


  addNewTask = newTaskName =>{
    const newState = {
      ...this.state,
      tasksList:[
        ...this.state.tasksList,
        {name:newTaskName, completed:false, id:Date.now()}
      ]
    };
  
   // window.localStorage.setItem('tasksList',JSON.stringify(newState));
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

  setSearchArray = someString => {
    const items = tasks.filter(term =>
      term.name.toLowerCase().includes(someString.toLowerCase())
    );
    this.setState(items);
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    
    return (
      <div className="container">
        <h3>My ToDo List</h3>
        <SearchForm tasks={tasks}
         SearchArray={this.setSearchArray}/>
        <TodoForm 
          addNewTask={this.addNewTask}/>
        <TodoList 
          tasks={this.state.tasksList}
          toggleDone={this.toggleDone}
          clearTask={this.clearTask}
        />
      </div> 
    );
  }
}

export default App;
