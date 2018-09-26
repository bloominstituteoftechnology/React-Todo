import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todo: [
        {
          task: 'Organize Garage',
          id: 1,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 2,
          completed: false
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList />
        <ToDoForm />

      </div>
    );
  }
}

export default App;
