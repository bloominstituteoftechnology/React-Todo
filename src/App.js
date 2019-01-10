import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'


const todoData = [
  {id: 0, task: 'Clean Garage', completed: false },
  {id: 1, task:'Do Laundry', completed: false },
  {id: 2, task: 'Watch Seinfeld', completed: false },
]

let nextId = 3;
const getNewId = () => {
  nextId += 1;
  return nextId;
};


class App extends React.Component {
  constructor(){
  super();
  console.log();
  this.state={
    toDoListData: todoData,
    task: '',
    completedTasks: [],
  }
}

handleChanges = ev => {
  this.setState({ task: ev.target.value });
};

addNewToDo = ev =>{
  ev.preventDefault();
  this.setState({
    toDoListData:[
      ...this.state.toDoListData,
      {
        id: getNewId(),
        task: this.state.task,
        completed: false
      }
    ],
    task: ""
  })
};

// taskCompleted = id =>{
//   // ev.target.classList.toggle('strike');
//   this.setState({
//     toDoListData: this.state.toDoListData.map(todo =>{
//       if(todo.id === id){
//         return {
//           ...toDoListData,
//           todo: todo.addStrike === "strike" ? " " : "strike"
//         };
//       } else{
//         return toDoListData;
//       }
//     })
//   })
  taskCompleted = id => {
    console.log(id);
    this.setState({
      toDoListData: this.state.toDoListData.map(toDo => {
        if (toDo.id === id) {
          return {
            ...toDo,
            completed: toDo.completed ===  false ? true : false
          };
        } else {
          return toDo;
        }
      })
    }); 
  };

  removeCompleted = ev =>{
    ev.preventDefault();
    this.setState({
      toDoListData: this.state.toDoListData.filter(todo => todo.completed === false)
    })
  }
  // activity.task.push(this.state.completedTasks);
  // console.log(this.state.completedTasks)
  // console.log(activity.task)
  // console.log(i)
  // Toggle Completed to True
  // Add value to id completedTasks? 
  



  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
        toDoListData={this.state.toDoListData}
        taskCompleted={this.taskCompleted}
        />
        <TodoForm 
        handleChanges={this.handleChanges}
        task={this.state.task} 
        addNewToDo={this.addNewToDo}
        removeCompleted={this.removeCompleted}
        />
      </div>
    );
  }
}

export default App;
