import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  state = {
    todos: [],
    newTodo: '',
  };

  addNewTodo = (event) => {
    event.preventDefault();
    const todos = this.state.todos;
    const newTodo = this.state.newTodo;
    todos.push(newTodo);
    this.setState({
      newTodo: '',
      todos: todos,
    });
  };

  handleNewThingToDo = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  render() {
    return (
      <div className="Todo-List">
        <hr />
        <ul>
          {this.state.todos.map((item, i) => {
            return <Todo key={i} todo={item} />;
          })}
          <form onSubmit={this.addNewTodo}>
            <input type="text" onChange={this.handleNewThingToDo} placeholder="Add a new thing to do!" value={this.state.newTodo} />
          </form>
        </ul>
      </div>
    );
  }
}

export default TodoList;
