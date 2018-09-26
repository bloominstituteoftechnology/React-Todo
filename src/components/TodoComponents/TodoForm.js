import React from 'react';
import './Todo.css';


const TodoForm = (props) => {

    return (
        <div className="form">
            <input className="input" value={props.inputValue} onChange={props.inputFunction} onKeyPress={props.enterFunction}/>
            <div className="buttonsDiv">          
                <div className="button" onClick={props.submitFunction} >+</div>
                <div className="button remove">-</div>
            </div>  
        </div>
    )
};

export default TodoForm;