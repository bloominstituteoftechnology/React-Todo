import React, {Component} from 'react';
import './App.css';

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
    this.clearTodo = this.clearTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this)
  
    
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
    e.nativeEvent.stopImmediatePropagation(); 
  }
  clearTodo(e) {
    const items = this.state.items.filter(item =>{
          return item.completed !== true
    })
    this.setState({ items })
 this._inputElement.value = "";
  }
  toggleCompleted(e) {
   
           this.setState({
              items: this.state.items.map(item =>{
                if ( ('id'+`${item.id}`)=== e.target.id){
                  return{
                    inputTask: item.inputTask,
                    id: item.id,
                    completed : !item.completed
                  }
               
                }
                else {
                  return{
                    inputTask: item.inputTask,
                    id: item.id,
                    completed : item.completed
                  }
                }
              })
            })
            e.preventDefault();
    e.stopPropagation();
    //e.nativeEvent.stopImmediatePropagation(); 
  }
  
  render() {
  
    return (
      <div className='appstyle'>
        <h2>Welcome to My Todo App!</h2>
        <TodoList  items ={this.state.items} toggleCompl={this.toggleCompleted}/>
        <TodoForm addItem = {this.addItem} 
        clear = {this.clearTodo}
        refHandler={(a) => this._inputElement = a} />
      </div>
    );
  }
}

export default App;
