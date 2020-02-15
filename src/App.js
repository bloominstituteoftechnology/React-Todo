import React from 'react';
import './components/TodoComponents/Todo.css'
import TodoList from './components/TodoComponents/TodoList';
import { TodoData } from './data';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
  super();
  this.state = {
    TodoData
  }
    }
    handler = (itemID) =>{
      this.setState({ TodoData : this.state.TodoData.map(item =>{
      if(itemID === TodoData.id){
        return {
         ...item,
         completed : !item.completed
        }
      }
    return item;
  })})
}


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList  data = {this.state.TodoData} toggleCompleted = {this.handler}/>
        <TodoForm />
      </div>
    );
  }
}

export default App;
