// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

const TodoList = props => {

  if(props.killerList) {
    return (
      <ul>
        {
          props.killerList.map(item => {
          return <li key={Date.now()}>{item}</li>;
        })
        }  
      </ul>
    );
  } else {
    return null;
  }
}

export default TodoList;