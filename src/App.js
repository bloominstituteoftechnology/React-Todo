import React from 'react';

import TodoList from "./components/TodoComponents/TodoList";
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      greeting: "Welcome to your Todo App!",
      list: [
        "first",
        "second"
      ]
    };
  }
changeGreetingHandler = event => {
  console.log(event.target.value);
  this.setState()
};
  render() {
    return (
      <div>
        <TodoList coolList={this.state.list}/>
        <h2>{this.state.greeting}</h2>
      </div>
    );
  }
}

export default App;
