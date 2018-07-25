import React from 'react';
// import Todo from './components/TodoComponents/Todo'; 

const newTodo = [
  {
    task: "",
    id: Date.now(),
    completed: false
  }
];
console.log(newTodo, "hi")

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      message: "Todo List MVP", 
      todo: newTodo, 
    }; 
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
       <input placeholder="Enter Task" />
       <button>Add a Todo</button>
       <button onDoubleClick={this.handleUpdateState}>Completed Todo</button>
 
      </div>
    );
  }
}

export default App;
