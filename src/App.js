import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import ToDoLogo from './todoLogo.png';
import SearchBar from './components/TodoComponents/SeachBar';

const todoData = [
  {id: 0, task: 'Clean Garage', completed: false },
  {id: 1, task:'Do Laundry', completed: false },
  {id: 2, task: 'Watch Seinfeld', completed: false },
]

let nextId = 3;
console.log(nextId)
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
    search: '',
  }
}

handleChanges = ev => {
  this.setState({ [ev.target.name]: ev.target.value });
  if(ev.target.name === 'search'){
    this.setState({
      toDoListData: this.state.toDoListData.filter(toDo => {
        return toDo.task.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1; }
      )
  })
}
}

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

  taskCompleted = id => {
    this.setState({
      toDoListData: this.state.toDoListData.map(toDo => {
        if (toDo.id === id) {
          console.log(toDo.id);
          console.log(id);
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
  removeAll = ev =>{
    ev.preventDefault();
    this.setState({
      toDoListData: this.state.toDoListData.filter(todo => todo.id < 0)
   
    }) 
  }
  searchItem = () => {
    
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
      <div className="iphone">
        <div className="screen">
          <div className="logo-container">
            <img src={ToDoLogo} alt=""/>
          </div>
          <TodoList 
          toDoListData={this.state.toDoListData}
          taskCompleted={this.taskCompleted}
          />
          <TodoForm 
          handleChanges={this.handleChanges}
          task={this.state.task} 
          addNewToDo={this.addNewToDo}
          removeCompleted={this.removeCompleted}
          removeAll={this.removeAll}
          />
          <SearchBar 
          searchItem ={this.searchItem}
          handleChanges={this.handleChanges}
          
          />
        </div>
      </div>
    );
  }
}

export default App;
