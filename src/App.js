import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css"



class App extends React.Component {
    constructor(){
      super();
      this.state={
        data: [{
          task: 'Learn Python',
          id: Date.now(),
          completed: true
           }]
      }
    };

    handleChange = taskName =>{
       this.setState(
        { data: 
          [ ...this.state.data, 
         { 
           task : taskName,
           id: Date.now(),
           completed: false
        }]})
       
       
    };

  



  render() {
    return (
      <div>
      <TodoList list={this.state.data}/>
      <TodoForm handleChange={this.handleChange}   />
      </div>
    );
  }
}

export default App;
