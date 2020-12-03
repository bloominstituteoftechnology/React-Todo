import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import "./components/Todo.css"

const totalList = [
  {
    task: "Create your first task.",
    id: 987,
    completed: false
  },
  {
    task: "Click on your first task.",
    id: 654,
    completed: false
  },
  {
    task: "Clear your first task.",
    id: 321,
    completed: false
  }
]




class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      totalList
    }
  }

//handler to ADD TASK
//creates a new task from the item passed up, adds it to state.
addTask = (e, item) => {
  console.log(" Add Task" ,e)
  e.preventDefault();
  const newTask = {
    task: item,
    id: Date.now(),
    completed: false,
    
  }
  this.setState({
    ...this.state,
    totalList: [...this.state.totalList, newTask]
  });
};

//handler to TOGGLE TASK
toggleTask = (taskId) => {
  console.log(" Toggle Task", taskId)
  this.setState({
    ...this.state,
    totalList: this.state.totalList.map((task) =>{
      if(taskId === task.id){
        return{
          ...task,
          completed: !task.completed
        };
      } else {
        return task;
      }
    })

  });
};
//Test environment begin
// toggleTask2 = (taskId) => {
//   console.log(" Toggle Task", taskId)
//   this.setState({
//     ...this.state,
//     totalList: this.state.totalList.filter((task) => !task.completed )

//   });
// };





// //test environment end



//handler to RESET TASKS
toggleTask = (taskId) => {
  console.log(" Toggle Task", taskId)
  this.setState({
    ...this.state,
    totalList: this.state.totalList.map((task) =>{
      if(taskId === task.id){
        return{
          ...task,
          completed: !task.completed
        };
      } else {
        return task;
      }
    })

  });
};

//handler to DELETE TASK
deleteTask = (e) => {
  e.preventDefault();
  console.log(" Delete Task" , e)
  this.setState({
    ...this.state,
    totalList: this.state.totalList.filter((task)=> !task.completed)
  });
};



  render() {
    return (
    <>
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
          addTask={this.addTask} />

        </div>
      
        <TodoList 
          totalList = {this.state.totalList}
          toggleTask = {this.toggleTask}
          deleteTask = {this.deleteTask} />
        
      
      </>
    );
  }
}

export default App;
