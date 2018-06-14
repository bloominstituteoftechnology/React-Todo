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

  addToDo = () => {
    const toDos = this.state.task.slice();
    toDos.push({ 
      'task': this.state.item,
      'id': Date.now(),
      'completed': false,
     });
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
  //  this.setState({ task: items });
 }


  render() {
    return (
      <div>
      <TodoList task={this.state.task} toggle={this.toggleCompleted} />
      <ToDoForm changeHandle={this.changeHandler} inputValue={this.state.item} addNew={this.addToDo} />
      </div>
    );
  }
}

export default App;
