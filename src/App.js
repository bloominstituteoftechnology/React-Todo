import React from 'react';
import {todoList} from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      todoText: todoList,
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTodo = event =>{
    event.preventDefault();
    const newTodo = {
      todoText: this.state.todoText,
    };
    // console.log(event.target.value);
    this.setState ({
      todoText: [this.state.todoText, newTodo],
      completed: false,
    })
  }
  handleChanges = event => {
    event.preventDefault();
    console.log(event);
  }
  render() {
    return (
      <div>
        <TodoForm />
        <h1>To Do List: </h1>
        <div className="todoList">
          {this.state.todoText.map(todo => (
            <Todo newTodo={todo}/>
          ))}
        </div>
      </div>
      
    );
  }
}

export default App;
