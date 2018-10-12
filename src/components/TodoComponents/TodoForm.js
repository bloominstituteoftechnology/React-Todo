import React from 'react';


const TodoForm =  props => {
    return(
        <div className="todo-form">
            {/* <h1 className="form-heading">Enter ToDo</h1> */}
            <input className="todo-input" type="text" name="inputText" onKeyDown={props.pressEnter} onChange={props.changeHandler} value={props.inputText} placeholder="Enter ToDo Item Here..."/>
            <button className="formBtn" type="submit" value="submit" onClick={props.addTodo}>Submit</button>
            <button className="formBtn" type="reset" onClick={props.clearCompleted} value="clear">Clear Completed</button>
        </div>
    );
}

export default TodoForm;