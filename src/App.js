import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
 
state = {
    todos: [
      {
        task: 'Practice JavaScript',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Practice React',
        id: 1528817084358,
        completed: false
      }
    ],
  }


  addTodoHandler = (event) => {
    const todos = this.state.todos.slice();
    const input = document.querySelector('input');
    const text = input.value;
    todos.push({
      task: text,
      id: Date.now(),
      completed: false
    });
    this.setState({todos: todos});
    input.value = "";
  }
   render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos}/>
        <TodoForm addTodo={this.addTodoHandler}/>
      </div>
    );
  }
 }
 
 export default App;
