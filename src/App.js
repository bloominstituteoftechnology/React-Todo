import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      
      todo: '',

      todos: [
        {
        task: "Learn how to use React",
        id:1528817077286,
        completed: false
        },
        {
        task: "Go for a walk",
        id:1528817077286,
        completed: false
          },
        {
        task: "Try, try again",
        id:1528817077286,
        completed: false
          }
      ],
    };
  }

  addTask = () => {
    this.setState ({});
  }
  render() {
    return (
      <div className="app">
        <h2>What do you need to do?</h2>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;


// const element = <App />;

// ReactDOM.render(element, document.getElementById("root"));