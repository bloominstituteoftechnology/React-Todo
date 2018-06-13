import React from 'react';
import Todo from './components/TodoComponents/Todo';



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      title: 'This is Ems Todo List'
    };
  }



  render() {
    // console.log("What is this?");
    return (
      <div>
        <h1>{this.state.title}</h1>
          <Todo />
      </div>




    );
  }
}

export default App;
