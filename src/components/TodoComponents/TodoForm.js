import React from 'react';

const TodoForm = props => {
    return(
        <div>
            <input type="text" name="inputText" onChange={props.changeHandler} value={props.inputText} placeholder="Enter Todo Item" />
            <input type="submit" value="submit"/>
            <input type="button" value="clear"/>
        </div>
    );
}

export default TodoForm;