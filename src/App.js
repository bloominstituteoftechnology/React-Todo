import React from 'react';
// import TodoList from './components/TodoComponents/TodoList';

const TodoItem = props => {
  const { task } = props.todoItem;
  return (
    <div>
      <ul>
        <li>{task}</li>
      </ul>
    </div>
  )
}


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [{task: "Organize Garage", id: Date.now(), completed: false}],
      task: ''
    }
  }

  taskChange = e => {
    this.setState({task: e.target.value});
  }

  addTodo = e => {
    e.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({ task: this.state.task, id: Date.now(), completed: false});
    this.setState({todos: todos});
  }

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <div>{this.state.task}</div>
        {this.state.todos.map(item => <TodoItem todoItem={item}/> )}
        
        {<input placeholder="....todo" onChange={this.taskChange}/> /*This is working */}

        <button onClick={this.addTodo}>Add Todo</button>

        {/* <button onClick={this.displayTodo}>Clear Completed</button> */}
      </div>
    );
  }
}

export default App;
