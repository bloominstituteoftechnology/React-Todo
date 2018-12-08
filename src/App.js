import React from 'react';
import ReactDom from 'react-dom';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todoInput: '',
      todoList: []
    };
  }

  createNewTodo = (text) =>{
    const newTodo = {
      task: text,
      id: Date.now(),
      completed: false
    };
    this.setState(prevState => {
      const todos = prevState.todoList.slice();
      todos.push(newTodo);
      return { todoList: todos };
    });
  }

  changeHandler = e =>{
    this.setState({todoInput: e.target.value});
  }

  submitHandler = e =>{
    e.preventDefault();
    this.createNewTodo(this.state.todoInput);
    this.setState({todoInput: ''});
  }

  clickHandler = (taskId) =>{
    let todos = this.state.todoList.slice();
    let todosCompleted = todos.map(todo => {
      if(todo.id === taskId){
        todo.completed = !todo.completed;
        return todo;
      }
      else {
        return todo;
      }
    });
    this.setState({todoList: todosCompleted});
  }

  deleteHandler = () =>{
    let todos = this.state.todoList.slice();
    let todosDelete = todos.filter(todo => todo.completed === false);
    this.setState({todoList: todosDelete});
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoItem={this.state.todoList} click={this.clickHandler}/>
        <TodoForm submit={this.submitHandler} delete={this.deleteHandler} value={this.state.todoInput} change={this.changeHandler}/>
      </div>
    );
  }
}

export default App;
