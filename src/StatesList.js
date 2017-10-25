/* eslint-disable no-unused-vars, no-console */
import React from 'react';
import './index.css';
const StatesList = (props) => {
  const getState = props.states.map((toDosO, i) => {
    // console.log(`i: ${i}  toDos.length ${toDos.length}`);
    // console.log('getState toDosO', toDosO);
    const toDos = toDosO.toDos;
    let toDo;
    if (toDosO.deletedToDo) {
      toDo = toDosO.deletedToDo;
    } else 
    if (toDosO.lastChangeToDo) {
      toDo = toDosO.lastChangeToDo;
    } else
    if (toDos.length) {
      toDo = toDos[toDos.length - 1];
    } else {
      toDo = null;
    }
    const text = toDo === null ? 'Empty;' : toDo.text;
    const completed = toDo === null ? '---' : (toDo.completed ? 'true' : 'false');
    const deleted =  (toDosO.deletedToDo) ? 'Deleted' : '';
    return (
      <li key={i}>
        <button onClick={() => props.jumpTo(i)} className={`x${deleted}`} >
               text: {text}&nbsp; completed: {completed} &nbsp; {deleted}
        </button>
      </li>);
  });     
  return (
    <div id="states">
      <p>History</p>
      <ol>
        {getState}
      </ol>
    </div>
  );
};
export default StatesList;