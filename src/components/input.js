import React from 'react';

const Input = props => {
  return (<div>
    <input type="text" name="textInput" value={props.textInput} placeholder="Put To Do Here!" onChange={this.handleAddToDo}/>
  <button onClick={this.handleSubmitToDo}>Add ToDo</button>
</div>)
}
export default Input;
