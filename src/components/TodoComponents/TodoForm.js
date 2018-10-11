import React from 'react';


const TodoForm =  props => {
    return(
        <div className="todo-form">
            <h1>Enter ToDo</h1>
            <input type="text" name="inputText" onChange={props.changeHandler} value={props.inputText}/>
            <button type="submit" value="submit" onClick={props.addTodo}>Submit</button>
            <button type="reset" value="clear">Clear</button>
        </div>
    );
}

export default TodoForm;