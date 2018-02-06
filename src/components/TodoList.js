import React from 'react';
import Todo from './Todo.js';

class TodoList extends React.Component {
  state = {
    todos: [],
    newTodo: '',
  };

  addTodo = (event) => {
    event.preventDefault();
    const todos = this.state.todos;
    todos.push(this.state.newTodo);
    this.setState({
      newTodo: '',
      todos: todos,
    });
  }

  handlenewTodoInput = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  render() {
    return (
      <div className='todo-todos'>
        <ul>
          {this.state.todos.map((item, i) => {
            return <Todo key={i} todo={item} />;
          })}
        <form onSubmit={this.addTodo}>
          <input type="text" onChange={this.handlenewTodoInput} placeholder="Write something" value={this.state.newTodo} />
        </form>
        </ul>  
      </div>
    );
  }
}

export default TodoList;
