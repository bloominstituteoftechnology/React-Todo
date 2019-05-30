import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import SearchBar from './components/TodoComponents/SearchBar';
let initialData = [
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
];

const appStorage = window.localStorage;
if (appStorage.getItem("todos")) {
  initialData = JSON.parse(appStorage.getItem("todos"));
} else {
  appStorage.setItem("todos", JSON.stringify(initialData));
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: initialData,
      todoInput: "",
      searchString: "",
    }
  }

  onInputChange = (e) => {
    this.setState({ todoInput: e.target.value });
  }
  saveTodos = () => {
    appStorage.setItem("todos", JSON.stringify(this.state.todos));
  }
  addTodo = (e) => {
    if (this.state.todoInput){
      this.setState({ todos: this.state.todos.concat({
          task: this.state.todoInput,
          id:Date.now(),
          completed: false,
        })
      })
      this.setState({todoInput: ""});
    }
  }

  completeTask = (e) => {
    let todoCopy = this.state.todos.map((item) => {
      if(item.id === parseInt(e.target.id)){
        item.completed = !item.completed;
      }
      return item;
    })
    this.setState(
      {
        todos: todoCopy
      }
    )
  }

  clearCompleted = (e) => {
    let newTodos = this.state.todos.filter((item) => !item.completed);
    this.setState({ todos: newTodos });
  }

  inputKeyPress = (e) => {
    var keycode = e.keyCode ? e.keyCode : e.which;
    if (keycode === 13){
      this.addTodo();
    }

  }

  onSearchBarChange = (e) => {
    this.setState({ searchString: e.target.value });
  }
  
  render() {
    this.saveTodos();
    return (
      <div>
        <SearchBar
          value={this.state.searchString}
          searchChange={this.onSearchBarChange}
        />
        <TodoList
          todoList={this.state.todos}
          searchString ={this.state.searchString}
          completeTask={this.completeTask}
        />
        <TodoForm
          value={this.state.todoInput}
          inputEvent={this.onInputChange}
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
          inputKeyPress={this.inputKeyPress}
        />
      </div>
    );
  }
}

export default App;
