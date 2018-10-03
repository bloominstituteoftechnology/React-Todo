import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData: [
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
    }; // this.state
  }

  render() {

    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList todoData={this.state.todoData} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
