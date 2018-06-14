import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      'task': [],
      'item': '',
    }
  }

  changeHandler = event => {
    this.setState({ item: event.target.value });
  };

  addToDo = e => {
    e.preventDefault();
    const toDos = this.state.task.slice();
    toDos.push({ 
      'task': this.state.item,
      'id': Date.now(),
      'completed': false,
     });
     if(this.state.item === '') {
       return;
     }
    this.setState({ task: toDos, item: '' });
  }

 toggleCompleted = id => {
   let items = this.state.task.slice();
   items = items.map(item => {
     if(item.id === id) {
       item.completed = !item.completed;
       return item;
     } else {
       return item;
     }
   });
   this.setState({ items });
 }

 clearCompleted = event => {
   event.preventDefault();
   let tasks = this.state.task.slice();
   tasks = tasks.filter(task => !task.completed);
   this.setState({ task: tasks });
 }


  render() {
    return (
      <div className="container">
      <TodoList task={this.state.task} toggle={this.toggleCompleted} />
      <ToDoForm changeHandle={this.changeHandler} inputValue={this.state.item} addNew={this.addToDo} handleCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
