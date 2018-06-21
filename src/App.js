import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    // step 2. call your `constructor`
    super(); // needs to be a class because it holds onto state.
    this.state = {
      greeting: "This should've been called a grocery list so we didn't have all these todos:)",
      todos: [
        {
          task: 'Finish Lambda',
          id: Math.random(),
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: Math.random(),
          completed: false
        },
        {
          task: 'Organize Garage',
          id: Math.random(),
          completed: false
        },
        {
          task: 'Get A Job',
          id: Math.random(),
          completed: false
        },
      ]
    };
    // state is the memory we have in our component,
    // props is the mechanism for passing that state around.
    // Not-so OLD WAY of binding our handlers // this.alertBandNameHandler = this.alertBandNameHandler.bind(this);
  }

  
  render() {
    return (
      <div>
        <div>
         
        </div>
        <h2>{this.state.greeting}</h2>
        <TodoList
        todos={this.state.todos}
        />
         <TodoForm />
      </div>
    );
  }
}

export default App;
