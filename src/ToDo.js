import React from 'react';

const ToDo = props => {
    return (
      <div>
        <input type="text" value={props.thingToDo} onChange={props.changeHandler} />
        <button onClick={props.addToList}>placeholder</button>
        <ul>
          {props.listToDo.map((thingToDo, i) => {
            return <li key={i + 1}>{thingToDo}</li>;
          })}
        </ul>
      </div>
    );
  };
  
  export default ToDo;