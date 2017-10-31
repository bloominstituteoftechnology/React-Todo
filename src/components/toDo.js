import React from 'react';

const ToDo = props => {
  return (
    <div>
      <input type='text' value={props.removeOldString} onChange={props.changeHandler} />
      <button onClick={props.addToList}>Add to List</button>
      <ul>
        {props.toDoList.map((item, i) => {
          return <li key={i + 1}><input type='checkbox' onChange={props.checkHandler} name='completed' value={item.text}/>{item.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default ToDo;