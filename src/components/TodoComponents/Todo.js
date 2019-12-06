import React from 'react';

const Todo = props =>  {

    return (

      // When adding an onClick method you need to not place it between the different divs, but you need to place it before the first 'div' completes
      <div
      onClick={e => props.toggleItem(props.chores.id)}>
        {props.chore.name}
        </div>
    );
};

export default Todo;