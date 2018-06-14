import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';

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
      newTodo: '',
      searchTodo: ''
    }
  }

  changeHandler = (e) => {
    this.setState({ newTodo: e.target.value});
  }

  addTodoHandler= (e) => {
    if (this.state.newTodo.length >= 1) {
      this.state.todos.push({
        task: this.state.newTodo,
        id: Date.now(),
        completed: false
      });
      this.setState({ todos: this.state.todos, newTodo: ''});
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
      localStorage.setItem("newTodo", "");
      e.preventDefault();
    }
    e.preventDefault();
  }

  clickToggleComplete = (index) => {
    let updatedTodos = this.state.todos
    let task = document.getElementById(updatedTodos[index].id);
    task.classList.toggle('completed');
    updatedTodos[index].completed = !updatedTodos[index].completed;
    this.setState({ todos: updatedTodos});
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  clickRemoveHandler = (e) => {
    let nonCompletedTodos = this.state.todos.filter(todo => todo.completed===false);
    this.setState({todos: nonCompletedTodos});
    localStorage.setItem("todos", JSON.stringify(nonCompletedTodos));
    e.preventDefault();
  }

  searchHandler = (e) => {
    this.setState({searchTodo: e.target.value});
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
 }

  render() {
    return (
      <div className='todo-list'>
        <div className="header">
          <h1>TODO LIST</h1>
          <input onChange={this.searchHandler} type="text" placeholder="..search"/>
        </div>
        <TodoList clickToggle={this.clickToggleComplete} todoList={this.state.todos} searchText={this.state.searchTodo}/>
        <TodoForm onSubmitHandler={this.addTodoHandler} value={this.state.newTodo} onChangeHandler={this.changeHandler} onClickRemove={this.clickRemoveHandler}/>
      </div>
    );
  }
}

export default App;
