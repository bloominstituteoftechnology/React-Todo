// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';

import TodoItem from './TodoItem';



class TodoList extends React.Component {
  render() {
    return (
      <ul className="todolist">
        {this.props.items.map(item => (
          <TodoItem key={item.id} id={item.id} text={item.text} completed={item.done} onItemCompleted={this.props.onItemCompleted} onDeleteItem={this.props.onDeleteItem} />
        ))}
      </ul>
    );
  }
}

export default TodoList;