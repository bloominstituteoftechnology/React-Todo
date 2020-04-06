// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Item from './Item.js';
export default function TodoList(props) {
  // const task = props.task.map((item) => {
  //   console.log(item.task);
  // });
  console.log(props.task);
  return (
    <div className='list'>
      <h2 className='todo'>ToDo:</h2>
      <section className='listWrap'>
        {props.task.map((item) => (
          <Item key={item.id} item={item} toggleItem={props.toggleComplete} />
        ))}
      </section>
      <button className='clearBtn btn' onClick={props.clear}>
        Clear Completed Tasks
      </button>
    </div>
  );
}
