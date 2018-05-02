// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

const ComponentList = props => {
  return (
    <ul>
      {props.list.map((item, i) => {
        return (
          <li key={item.id} id={item.id} onClick={() => {
            item.completed = !item.completed;
            item.strikeThrough(i);
          }}>
          {item.name}
          </li>
        );
      })}
    </ul>
  )
}

export default ComponentList;
