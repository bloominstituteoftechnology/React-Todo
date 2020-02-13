import React from "react";
import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"
import Todo from "./components/TodoComponents/Todo"


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  
  constructor(){

    super()
    this.state = {
      

    }
  }

  render() {
    return (
      <div className="app-wrapper">
      
        <TodoForm />
        <TodoList
          todoItems ={this.state.todoItems}
          toggleItem={this.toggleItem}
          clearPurchased={this.clearPurchased}
        />



     
       
      </div>
    );
  }
}

export default App;
