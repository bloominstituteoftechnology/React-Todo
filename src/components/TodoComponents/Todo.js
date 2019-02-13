import React from 'react';

export default function Todo({ todoData, onComplete }) {
  return <div onClick={() => onComplete(todoData.id)}>{todoData.task}</div>;
}
