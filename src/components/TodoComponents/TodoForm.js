import React from 'react';

const TodoForm = props => {
  return (
    <div>
      <input className='input' onKeyPress={e => {if (e.charCode === 13) {
        props.submit();
      }}} placeholder='To Do...' onChange={props.onchange} />
      <button onClick={props.submit}>Submit</button>
      <button onClick={props.clearComplete}>Clear Completed Tasks</button>
      <button onClick={props.annihilate}>Clear All</button>
    </div>
  )
}

export default TodoForm;
