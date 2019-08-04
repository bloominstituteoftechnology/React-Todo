import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm"
import TodoList from "./components/TodoComponents/TodoList"



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state={
      todo:[{
            task: "swim",
            id: Date.now(),
            complete: false
          }]
      
    }
    console.log('state', this.state)
  }
  handleChangeFunction = event => {
    // this.setState({ todo: event.target.value})
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
       
        <TodoList todo={this.state.todo}/>
        <TodoForm />
      </div>
    );
  }
}

export default App;
