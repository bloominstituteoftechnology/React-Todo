//<TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.
import React from 'react';
import './Todo.css';
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => {
          return <Todo 
                    key={todo.id}
                    todo={todo}
                    handleClick={this.props.handleClick}
                  />
        })}
      </div>
    )
  }
}

export default TodoList;
