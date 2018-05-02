// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const AddButton = (props) => <button onClick={props.onClick}>Add</button>;

export const AddField = (props) => <input
  name={props.name}
  onChange={props.onChange}
  value={props.value}
  placeholder="New Task"
/>

export const ListView = (props) => {
  return (
    <ul>
      {
        props.tasks.map((task, index) => <li onClick={() => props.onClick(index)}>{task}</li>)
      }
    </ul>
  );
}


export default AddButton;
