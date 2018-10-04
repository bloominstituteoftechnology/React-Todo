import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoList : [
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
           task: 'Lambda Challenge',
           id: 1528817084350,
           completed: false
        },
      ],
      todo : ''
    };
  }
  
  addTaskTodoList = (event) => {
    event.preventDefault();
    const toDoList = this.state.toDoList.slice(); 
    toDoList.push({ task : this.state.todo, 
                    id : Date.now(),
                    completed : false });

    this.setState({toDoList, todo: ''}); // setting both state toDoList and todo.
  };

  changeTodo = (event) => this.setState({ 
                                [event.target.name]  : event.target.value
                          });  

  toggleTodoComplete = id => {
    let toDoList = this.state.toDoList.slice();
    toDoList = toDoList.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ toDoList });
  };

  clearCompletedTodos = (event) => {
    event.preventDefault();
    let toDoList = this.state.toDoList.slice();
    toDoList = toDoList.filter(todo => !todo.completed);
    this.setState({ toDoList });

  };


  render() {
    return (
      <div className = "app">
        
        <h1 className = "list-heading">Update Todo List.. </h1>

        <TodoList
          handleToggleComplete = {this.toggleTodoComplete}
          toDoList = {this.state.toDoList}
        />
        <TodoForm
          value = {this.state.todo}
          handleTodoChange = {this.changeTodo}
          addTodo = {this.addTaskTodoList}
          clearTodos = {this.clearCompletedTodos}
        />  
        
      </div>
    );
  }
}

export default App;
