import React from 'react';

// Importing COMPONENTS
import TodoList from './components/TodoList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos:  [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'Walk The Dog',
          id: 1528817093467,
          completed: false
        }
      ]
    };   
  }


  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList todo={this.state.todos} />
      </div>
    );
  }
}

export default App;
