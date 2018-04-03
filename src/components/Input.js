import React from 'react';

const Input = props => {
  return (
    <div>
      <input 
        type="text"
        name="textInput" 
        value={props.textInput} 
        placeholder="Put To Do Here!" 
        onChange={props.parent.handleAddToDo}
      />
    </div>
  )
}

export default Input;