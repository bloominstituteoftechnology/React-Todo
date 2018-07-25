import React from 'react';

  const newTodo = [
    {
      task: "",
      id: Date.now(),
      completed: false
    }
  ];
  

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

      </div>
    );
  }
}

export default App;
