import React from 'react';

const TodoItem = props => {
  return (
    <div>
      task: {props.data.task} (from 'TodoItem')
    </div>
  )
}

export default TodoItem;
