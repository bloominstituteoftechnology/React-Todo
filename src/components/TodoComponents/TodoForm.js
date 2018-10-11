import React from 'react';


const TodoForm =  () => {
    return(
        <div className="todo-form">
            <h1>Enter ToDo</h1>
            <input type="text" name="addTodo" value=""/>
            <button type="submit" value="submit">Submit</button>
            <button type="reset" value="clear">Clear</button>
        </div>
    );
}

export default TodoForm;