import React from 'react';

import Item from './item';

const TodoList = props => {
  return (
    <div>
      {props.list.map(item => (
        <Item key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={props.clearComplete}>
        Clean List
      </button>
    </div>
  );
};

export default TodoList;
