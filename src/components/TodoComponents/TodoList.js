import React from 'react';
import Todo from "./Todo";
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
    };
  }


  render() {
    return (
      <div>
          {this.props.todoData.map((item) => {
              return <Todo task={item} setCompleted={this.props.setCompleted}/>
          })}
      </div>
    );
  }
}

export default App;
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
