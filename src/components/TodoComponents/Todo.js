import React from 'react';

// creates a list of items based on user input
const ToDo = props => {
  const {task, id, completed} = props.item;
  return (
    <li className="everythingElse" key={id} onClick={props.clicked}>
      {task}
    </li>
  );
};

export default ToDo;
