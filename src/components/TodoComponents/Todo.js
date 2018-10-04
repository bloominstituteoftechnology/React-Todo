import React from 'react';

function Todo(props) {
    return(
        <div>
          {props.list.map(name=> {
            return <h2>{name.entry}</h2>
        })}
        <input type='text' name="inputText" placeholder="To do..." onChange= {props.changeHandler} value={props.inputText} />
        <button onClick={props.addNewCharacter}>Submit</button>
        
        </div>
    )
}

export default Todo