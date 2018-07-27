import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
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
      ],
      input: ''
    }
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.list} />
      </div>
    );
  }
}

export default App;
