// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Item from './Item.js';
export default function TodoList(props) {
  return (
    <section className='listWrap'>
      <h2>ToDo:</h2>
      {props.task.map((item) => (
        <Item key={item.id} item={item} toggleItem={props.toggleComplete} />
      ))}
      <button className='clearBtn' onClick={props.clearComplete}>
        Clear Completed Tasks
      </button>
    </section>
  );
}
