import React from 'react';

const toDoList = [
  {
    toDo: "Create your first task",
    id: 987,
    completed: false
  },
  {
    toDo: "Clear your first task",
    id: 654,
  }
]




class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      toDoList
    }
  }

//handler to ADD TASK
//creates a new task from the item passed up, adds it to state.
addTask = (e, item) => {
  console.log(" Add Task" ,e)
  e.preventDefault();
  const newTask = {
    name: item,
    purchase: false,
    id: Date.now()
  }
  this.setState({
    ...this.state,
    toDoList: [...this.state.toDoList, newTask]
  });
};

//handler to TOGGLE TASK
toggleTask = (taskId) => {
  console.log(" Toggle Task")
  this.setState({
    ...this.state,
    toDoList: this.state.toDoList.map((task) =>{
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
    toDoList: this.state.toDoList.filter((task)=> !task.completed)
  });
};



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        
      </div>
    );
  }
}

export default App;
