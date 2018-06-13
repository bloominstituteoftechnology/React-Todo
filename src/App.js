import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super();
      this.state = {
        greeting: "Todo List: MVP",
        things: [
          {
            task: 'Organize Garage',
            id: 1528817077286,
            completed: false
          },
          {
            task: 'Bake Cookies',
            id: 1528817084358,
            completed: false
          }
        ]
      } 
}
  render() {
    console.log("render called");
    return (
      <div>
        <h2>{this.state.greeting}</h2>
        <ul>
          {this.state.things.map(something=><li key={something.id}>{something.task}</li>)}
          {/* <ul>{Object.entries(this.state.things)}</ul> */}
        </ul>
        <TodoList />
        <TodoForm />
        
      </div>
    );
  }
}

export default App;


