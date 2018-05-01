import React from 'react';

import { ToDoInput } from './ToDoInput';

export const ToDoForm = props => {
    return(
        <div className="todo-form">
            <ToDoInput 
                inputClassName ="todo-input-text"
                inputOnChange={ props.handleInputChange}
                inputType="text"
                inputValue={props.inputTextValue}
            />
            <ToDoInput 
                inputClassName ="todo-input-submit"
                inputType="submit"
                inputValue="Submit New Task"
                inputOnClick={ props.handleAddTask }
            />
        </div>
    );
};