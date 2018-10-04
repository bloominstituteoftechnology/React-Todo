import React from 'react';

const TodoForm = props => {
    return(
        <div>
            <ul>
                <li>
                    <input type="text" name="inputText" onChange={props.changeHandler} value={props.inputText} placeholder="Enter Todo Item" /> 
                </li>
                <li>
                    <input type="textarea" name="descriptionText"  onKeyDown={props.enterTask} onChange={props.changeHandler} value={props.descriptionText} placeholder="Enter Description" />
                </li>
                <li>
                    <input type="submit"  onClick={props.addTask} value="submit"/>
                    <input type="button" value="clear"/>
                </li>
            </ul>
            
        </div>

    );
}

export default TodoForm;

