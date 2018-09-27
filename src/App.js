import React, {Component} from 'react';
//import './App.css';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = { 
      items: []
    }
    this.addItem = this.addItem.bind(this);
    
  }
  
  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        inputTask: this._inputElement.value,
        id: Date.now(),
        completed : false
      };
   
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem) 
        };
      });
     
      this._inputElement.value = "";
    }
     
    
       
    e.preventDefault();
    e.stopPropagation(); 
  }
  
  render() {
  
    return (
      <div >
        <h2>Welcome to My Todo App!</h2>
        <TodoList  items ={this.state.items}/>
        <TodoForm addItem = {this.addItem} 
        refHandler={(a) => this._inputElement = a} />
      </div>
    );
  }
}

export default App;
