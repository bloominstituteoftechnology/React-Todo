import React from 'react';
import Todo from './Todo';

export default function ToDoList({ todoObject, onComplete }) {
  return (
    <div>
      {todoObject.map(toDo => (
        <Todo key={toDo.id} todoData={toDo} onComplete={onComplete} />
      ))}
    </div>
  );
}
