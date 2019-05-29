import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
const exampleData = [
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
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: exampleData,
      todoInput: "",
    }
  }

  onInputChange = (e) => {
    this.setState({ todoInput: e.target.value });
  }

  addTodo = (e) => {
    this.setState({ todos: this.state.todos.concat({
        task: this.state.todoInput,
        id:Date.now(),
        completed: false,
      })
    })
  }

  completeTask = (e) => {
    let todoCopy = this.state.todos.map((item) => {
      if(item.id === parseInt(e.target.id)){
        item.completed = true;
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
    
  }
  
  render() {
    return (
      <div>
        <TodoList
          todoList={this.state.todos}
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
