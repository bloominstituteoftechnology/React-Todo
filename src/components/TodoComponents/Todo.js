import React from 'react';
import './Todo.css';

export default function Todo({ todoData, onComplete }) {
  if (todoData.completed === false) {
    return <div onClick={() => onComplete(todoData.id)}>{todoData.task}</div>;
  } else {
    return <div onClick={() => onComplete(todoData.id)} className='strikethrough'>{todoData.task}</div>;
  }
}
