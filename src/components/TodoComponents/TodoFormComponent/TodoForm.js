import React from 'react';

const TodoForm = props => {
    return(
        <div>
            <input type="text" name="inputText"  onKeyDown={props.enterTask} onChange={props.changeHandler} value={props.inputText} placeholder="Enter Todo Item" /> 
            <input type="textarea" name="descriptionText"  onKeyDown={props.enterTask} onChange={props.changeHandler} value={props.descriptionText} placeholder="Enter Description" />
            <input type="submit"  onClick={props.addTask} value="submit"/>
            <input type="button" value="clear"/>
        </div>

    );
}

export default TodoForm;