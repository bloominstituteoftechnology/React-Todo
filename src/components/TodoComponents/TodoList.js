// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className='todo-list'>
        {this.props.todoList.map((todo) => (
          <Todo todoInfo={todo} key={todo.id} toggleComplete={this.props.toggleComplete} className={todo.completed ? 'todo-complete' : 'todo-incomplete'} />
        ))}
      </div>
    );
    /*
    return (
      <div className='todo-list'>
        {this.todoList.map((todo) => {
          <Todo todoInfo={todo} />
        })}
      </div>
    )
    */
  }
}

export default TodoList;