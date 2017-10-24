import React from 'react';

const toDoList = props => {
  return (
    <div>
      <input type="text" value={props.title} onChange={props.changeHandler} />
      <button onClick={props.addToList}>Submit list</button>
      <ul>
        {props.items.map((list, i) => {
          return <li key={i + 1}>{list}</li>;
        })}
      </ul>
    </div>
  );
};

export default toDoList;