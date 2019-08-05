import React from 'react';
import { Button } from "shards-react";
import Todo from './Todo';

const TodoList = props => {
  // const sortedList = props.tasks.sort((a, b) => a.completed - b.completed);
  return (
    <div className="todo-list">
      {props.tasks.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <Button theme='light' onClick={props.clearCompleted}>
        Clear Completed Objectives
      </Button>
    </div>
  );
};

export default TodoList;