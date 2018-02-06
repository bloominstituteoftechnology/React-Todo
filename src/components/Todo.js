import React from 'react';


const strikeText = (event) => {
  event.target.innerHTML = event.target.innerHTML.strike();
};

function Todo(props) {
  return <li onClick={strikeText}>{props.todo}</li>;
}

export default Todo;