import React from 'react';
import ReactDom from 'react-dom';
import ToDoForm  from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


const todos = [


];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    // initialize the state object
    this.state = {
      todoList: todos
    };

    // this.toggleItem = this.toggleItem.bind(this)
  }
  // Class methods to update state
  // arrow function implicity bind the "this" keyword to the function

  addTodo = todoName => {
    const newTodo = {
      todo: todoName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });
  };

  clearCompleted = () => {

    const newTodoList = this.state.todoList.filter( todo => todo.completed === false);

    this.setState({
      todoList: newTodoList
    });

  };

  toggleTodo = id => {
    const newTodoList = this.state.todoList.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      } else {
        return todo;
      }
    });
    this.setState({
      todoList: newTodoList
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm addTodo={this.addTodo}/>
        <TodoList 
          todos={this.state.todoList} 
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted}
          />
        
      </div>
    );
  }
}

export default App;
