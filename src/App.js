import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  constructor(){
    super();
    this.state ={
      todos:[
        {
          task: 'Complete React Classes Work',
          id:1234568787,
          completed: false,
        },
        {
          task:'Work on Tutor App',
          id:1234568788,
          completed:false,
        }
      ],
      todo:''
    };
  }

  changeTodo = event => this.setState({ [event.target.name]: event.target.value });

  addTodo = event=>{
    event.preventDefault();
    const newTodo = {
      task: this.state.todo,
      completed: false,
      id: Date.now()
    };
    this.setState({
      todos:[...this.state.todos, newTodo],
      todo:''
    });
  };

  toggleTodoComplete = id =>{
    let todos = this.state.todos.slice();
    todos = todos.map(todo =>{
      if (todo.id === id){
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  clearCompletedTodos = event =>{
    event.preventDefault();
    let todos = this.state.todos.filter(todo=> !todo.completed);
    this.setState({ todos });
  };

  render() {
    return (
      <div>
        <ToDoList>
          handleToggleComplete = {this.toggleTodoComplete}
          todos = {this.state.todos}
        </ToDoList>
        <TodoForm>
          value = {this.state.todo}
          handleTodoChange = {this.changeTodo}
          handleAddTodo = {this.addTodo}
          handleClearTodos = {this.clearCompletedTodos}
        </TodoForm>
      </div>
    );
  }
}

export default App;
