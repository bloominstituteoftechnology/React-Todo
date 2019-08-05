import React from 'react';
import { ListGroup, ListGroupItem } from "shards-react";
import Todo from './Todo';

const TodoList = props => {
  // const sortedList = props.tasks.sort((a, b) => a.completed - b.completed);
  return (
    <div className="todo-list">
      {props.tasks.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear completed
      </button>
    </div>
  );
};

export default TodoList;