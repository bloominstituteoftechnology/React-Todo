import React from 'react';
import './Todo.css';


const TodoForm = (props) => {

    return (
        <div className="form">
            <input className="input" value={props.inputValue} onChange={props.inputFunction} onKeyPress={props.enterFunction}/>
            <div className="buttonsDiv">          
                <div className="button" onClick={props.submitFunction} ><i class="fas fa-plus"></i></div>
                <div className="button remove" onClick={props.clearComplete}><i class="fas fa-minus"></i></div>
            </div>  
        </div>
    )
};

export default TodoForm;