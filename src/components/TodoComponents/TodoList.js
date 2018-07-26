// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'

const TodoList = props => {
    return (
      <div>
      {props.arrayprop.map((item) => <Todo strike={props.strike} key={item.id} itemprop={item}/>)}
      </div>
    );
  }

export default TodoList;
  