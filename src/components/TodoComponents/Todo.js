import React from 'react';

const Todo = props => {
    return <React.Fragment><p

      style={props.todoInfo.completed ? { textDecoration: 'line-through' } : null}
      onClick={() => props.toggle(props.todoInfo.id)}
    >
      <li><strong>{props.todoInfo.task}</strong></li>
      </p>
    </React.Fragment>
}

export default Todo; 