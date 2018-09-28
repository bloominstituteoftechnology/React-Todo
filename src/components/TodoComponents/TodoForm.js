import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <form onSubmit={props.clickHandler}>
                <input type="text" placeholder="Insert a todo..." value={props.value} onChange={props.inputHandler}></input>
                <div className="buttons-container">
                    <div className="button" onClick={props.clickHandler}>Add</div>
                    <div className="button" onClick={props.deleteHandler}>Clear</div>  
                </div>                          
            </form>            
        </div>       
    )
        
}

export default TodoForm;