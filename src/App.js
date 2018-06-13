import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      "List title": "Todo List: MVP",
      "items": [{
    task: 'Organize Garage',
    id: '',
    completed: false
  }, 
  {
    task: 'Bake Cookies',
    id: '',
    completed: false
  }]
      } 
  }

  render() {
    return (
      <div>
        <h1>{this.state["List title"]}</h1>
        <TodoList listItems={this.state.items} />
      </div>
    );
  }
}

export default App;
