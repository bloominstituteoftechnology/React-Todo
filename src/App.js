import React from 'react';
import addTodo from './components/TodoComponents/Todo'; 

const newTodo = props =>{
  const{task} = props.newTodoProp; 
  return(
    <div>
      <h4>{task}</h4>
    </div>
  )
}
class App extends React.Component {
  constructor(){
    super();
    this.state ={
      message: "Todo List MVP", 
      todo: addTodo, 
    }; 
  }
  handleEnterTask = event =>{
   
  }
  handleUpdateState = () =>{
    const todo = this.state.todo.slice(); 

    todo.push({
    task: "",
    id: Date.now(),
    completed: false
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
       <div>{this.state.message}</div>
       <input placeholder="Enter Task" />
       <button>Add a Todo</button>
       <button>Completed Todo</button>
      </div>
    );
  }
}

export default App;
