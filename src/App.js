import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
constructor(){
  super();
  this.state = {
    inputField: '',

    todoList : [
      {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }
    ],
    id: 1528817084358,
  }
}
  render() {
    return (
      <div>
       <TodoForm
         inputField = {this.state.inputField}
          clickHandler={this.clickHandler}
          clearClickHandler={this.clearClickHandler}
          messageChangeHandler={this.messageChangeHandler} />
        <TodoList todoList={this.state.todoList} itemCompleted={this.itemCompleted} />

      </div>
    );
  }
  clickHandler = event =>{
   event.preventDefault();
   this.setState({todoList: [...this.state.todoList, {
     task: this.state.inputField,
     id: this.state.id+1,
     completed: false}],
     inputField: ''
   });
   this.setState({id: this.state.id+1});

 }
 itemCompleted = id =>{
   let copy = [...this.state.todoList];
   copy = copy.map(task => {
     if(task.id === id) {
       task.completed = !task.completed;
       return task;
     } else {
       return task;
     }
   });
   this.setState({copy});

 }
  messageChangeHandler = event =>{
    event.preventDefault();
    this.setState({inputField: event.target.value});
  };

  clearClickHandler = event =>{
    event.preventDefault();
  }
}

export default App;
