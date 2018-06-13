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

  addTodoHandler(e){
    if (this.state.newTodo.length >= 1) {
      this.state.todos.push({
        task: this.state.newTodo,
        id: Math.random(),
        completed: false
      });
      this.state.newTodo = '';
      this.setState(this.state);
      e.preventDefault();
    }
  }



  render() {
    return (
      <div>
        <h2>TODO LIST</h2>
        <TodoList todoList={this.state.todos} />
          <form onSubmit={(e) => this.addTodoHandler(e)}>
            <input type="text" placeholder="..add new todo" value={this.state.newTodo} onChange={(e) => {this.changeHandler(e)}}/> 
            <button onClick={(e) => {this.addTodoHandler(e)}}>Add Todo</button>
            <button>Clear Completed</button>
          </form>
      </div>
    );
  }
}

export default App;
