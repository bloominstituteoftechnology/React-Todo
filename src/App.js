import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

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
  }

  changeHandler(e) {
    this.setState({ newTodo: e.target.value});
  }

  addTodo(){
    if (this.state.newTodo.length >= 1) {
      this.state.todos.push({
        task: this.state.newTodo,
        id: Math.random(),
        completed: false
      });
      this.state.newTodo = '';
      this.setState(this.state);
    }
  }

  render() {
    return (
      <div>
        <h2>TODO LIST</h2>
        <TodoList todoList={this.state.todos} />
          <input type="text" placeholder="..add new todo" value={this.state.newTodo} onChange={(e) => {this.changeHandler(e)}}/> 
          <button onClick={() => {this.addTodo()}}>Add Todo</button>
          <button>Clear Completed</button>
      </div>
    );
  }
}

export default App;
