import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  state = {
    todos: [
      "text",
      "textext",
    ],
    newTodo: '',
  };

  strikeText = () => {

  };

  addNewTodo = (event) => {
    event.preventDefault();
    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({
      newTodo: '',
      todos: todos,
    });
  };

  handleNewThingToDo = (event) => {

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
            <input type="text" onChange={} placeholder="Add a new thing to do!" value={this.state.newTodo} />
          </form>
        </ul>
      </div>
    );
  }
}

export default TodoList;