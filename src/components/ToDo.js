import React from 'react';

const ToDo = (props) => {
  return (
    <li className="incomplete">{props.item.text}</li>
  );
}

export default ToDo;