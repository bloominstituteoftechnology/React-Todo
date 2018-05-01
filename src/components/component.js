// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';

const AddButton = (props) => <button onClick={props.onClick}>Add</button>;

export const AddField = (props) => <input
  name={props.name}
  onChange={props.onChange}
  value={props.value}
  placeholder="New Task"
/>


export default AddButton;
