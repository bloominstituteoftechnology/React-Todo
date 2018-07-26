import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
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
      todo: ''
    }
    const formHandler = (e) => {
      this.setState = {todo: e.target.value};
    }
  }
  render() {
    return (
      <div>
        <TodoList />
        <TodoForm onChange={this.formHandler}/>
      </div>
    );
  }
}

export default App;
