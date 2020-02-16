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
      if(itemID === item.id){
        return {
         ...item,
         completed : !item.completed
        }
      }
    return item;
  })})
}
  onSub = e =>{
    e.preventDefault();
  }
  
  addItem = (itemText) =>{
    const newItem = {
      task: itemText,
      completed: false,
      id: Date.now()
    }
    this.setState({TodoData: [...this.state.TodoData, newItem]})
  }
  onClear = (e) =>{
    e.preventDefault();
    this.setState({TodoData: [...this.state.TodoData.filter(item => item.completed === false)]});
  }

  render() {
    return(
      <div className="container">
        <div className="borderlands">
        <h2>The To-do's</h2>
        <TodoList  data = {this.state.TodoData} toggleCompleted = {this.handler}/>
        <TodoForm addItem = {this.addItem} onClear={this.onClear}/>
        </div>
      </div>
    );
  }
}

export default App;
