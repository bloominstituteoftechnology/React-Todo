import React from 'react';

const TodoForm = (props) => {
    return (
            <div className="todo-form">
                <input type="text" value={props.input} onKeyDown={props.keypressHandler} onChange={props.changeHandler}/>
                <button type='submit'>Submit</button>
                <button className='cleared' onClick={props.clearHandler}>Clear Completed</button>
            </div>
    )
}
export default TodoForm