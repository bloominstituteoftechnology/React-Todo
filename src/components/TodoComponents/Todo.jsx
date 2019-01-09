import React from 'react';
import './Todo.css';

const ToDo = props => {
  return (
    <div>
      {props.list.map(item => {
        return (
          <div className="item-container" key={item.id}>
            {item.task}
          </div>
        );
      })}
    </div>
  );
};

export default ToDo;
