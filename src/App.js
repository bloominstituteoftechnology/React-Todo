import React from 'react';

// Importing COMPONENTS
import TodoList from './components/TodoList.js';
import Todo from './components/Todo.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      Todos:  [
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
    };   
  }


  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList todo={this.state.Todos} />
        <Todo />
      </div>
    );
  }
}

export default App;
