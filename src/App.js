import React from 'react';
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(props){
    super (props);
    this.state = {
      title: 'Todo List: MVP'
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;

