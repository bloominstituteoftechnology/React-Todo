import React from 'react';

const Input = props => {
  return (<div>
    <input type="text" name="textInput" value={props.textInput} placeholder="Put To Do Here!" onChange={props.parent.handleAddToDo
}/>
    <button onClick={props.parent.handleSubmitToDo}>Add To Do</button>
  </div>)
}

export default Input;
