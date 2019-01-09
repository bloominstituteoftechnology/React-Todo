import React from 'react';
import './Todo.css';

const ToDo = props => {
  return (
    <div>
      {props.list.map(item => {
        return (
          <div
            className="item-container"
            key={item.id}
            onClick={() => props.toggleCompleted(item.task)}
          >
            <p className={item.completed.toString()}>{item.task}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ToDo;
