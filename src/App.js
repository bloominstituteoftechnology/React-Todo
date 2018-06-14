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
      newTodo: ''
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.addTodoHandler = this.addTodoHandler.bind(this);
    this.clickToggleComplete = this.clickToggleComplete.bind(this);
  }

  changeHandler(e) {
    this.setState({ newTodo: e.target.value});
  }

  addTodoHandler(e){
    if (this.state.newTodo.length >= 1) {
      this.state.todos.push({
        task: this.state.newTodo,
        id: Date.now(),
        completed: false
      });
      this.setState({ todos: this.state.todos, newTodo: ''});
      e.preventDefault();
    }
  }

  clickToggleComplete(index){
    let updatedTodos = this.state.todos
    let task = document.getElementById(updatedTodos[index].id);
    task.classList.toggle('completed');
    updatedTodos[index].completed = !updatedTodos[index].completed;
    this.setState({ todos: updatedTodos});
  }

  clickRemoveHandler = (e) => {
    let nonCompletedTodos = this.state.todos.filter(todo => todo.completed===false);
    this.setState({todos: nonCompletedTodos});
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>TODO LIST</h2>
        <TodoList clickToggle={this.clickToggleComplete} todoList={this.state.todos} />
        <TodoForm onSubmitHandler = {this.addTodoHandler} value={this.state.newTodo} onChangeHandler={this.changeHandler} onClickRemove={this.clickRemoveHandler}/>
      </div>
    );
  }
}

export default App;
