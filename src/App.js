import React from 'react';
import ToDo from './components/TodoComponents/Todo';
import ToDoForm from './components/TodoComponents/TodoForm';


const toDoList = [
  {
    task: 'Play with Leia',
    id: 1,
    completed: false
  },
  {
    task: 'Bake Cake',
    id: 2,
    completed: false
  }
];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      task: "",
      toDoListState: toDoList
    }
  }

  handleInputChange = event => {
    this.setState({ task: event.target.value })
  }

  handleClickEvent = (event) => {   
    event.preventDefault();
    const newToDo = {           
      task: this.state.task,
      id: Date.now(),
      completed: false
    }
    this.setState({ 
      toDoListState: [...this.state.toDoListState, newToDo], 
      task: ""   
    })
  }

  toggleComplete = (id) => {
    const updatedList = this.state.toDoListState.map( item => {
      if (item.id === id) 
      return {...item, completed: !item.completed};
      return item;
    } )
    this.setState({ toDoListState: updatedList })
  }

  clearCompleted = (event) => {
    event.preventDefault();
    const updatedListAfterClear = this.state.toDoListState.filter( toDo => {
      return !toDo.completed;
    })
    this.setState({ toDoListState: updatedListAfterClear })
  }

  render() {
    return (
      <div className="container">
        <h1>To Do App</h1>

        <ul className="to-do-list">  {this.state.toDoListState.map( toDo => {
           return (
             <ToDo 
              toDo={toDo}       
              toggleComplete={this.toggleComplete} 
            />
          )
        })}   </ul>

        <ToDoForm 
          handleInputChange={this.handleInputChange} 
          handleClickEvent={this.handleClickEvent}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;