import React from 'react';

const Todo = props =>  {
  
  //console.log(props.chores.completed);
  //console.log(props.chores.id);

    return (
      // When adding an onClick method you need to not place it between the different divs, but you need to place it before the first 'div' completes
      <div
      className={`item${props.chores.completed ? " purchased" : ""}`}
      onClick={e => props.toggleItem(props.chores.id)}>
        {props.chores.name}
        </div>
    );
};

export default Todo;