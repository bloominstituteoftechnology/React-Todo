import React from 'react';

const Controls = (props) => 
    <div className="controls">
        <input placeholder='Todo Task' onChange={props.addTask} />
        <button>Add Todo List</button>
        <button>Clear Todo List</button>
    </div>


export default Controls
