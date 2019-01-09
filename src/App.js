import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

const todoData = [
  {id: Date.now(), task: 'Clean Garage', completed: false },
  {id: Date.now(), task:'Do Laundry', completed: false },
  {id: Date.now(), task: 'Watch Seinfeld', completed: false },
]


class App extends React.Component {
  constructor(){
  super();
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
        id: Date.now(),
        task: this.state.task,
        completed: false
      }
    ],
    task: ""
  })
};

taskCompleted = (ev) =>{
  ev.target.classList.toggle('strike');
  }
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
        addStrike = {this.state.addStrike}
        />
        <TodoForm 
        handleChanges={this.handleChanges}
        task={this.state.task} 
        addNewToDo={this.addNewToDo}
        />
      </div>
    );
  }
}

export default App;
