import React from 'react';

const TodoList = () => {
    return (
        <ul>
          {props.listItems.map(addList => {
            return <li key={date.now()}>{addList}</li>;
          })}
        </ul>   
      )
}

default export TodoList;
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
