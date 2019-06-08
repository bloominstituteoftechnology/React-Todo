import React from 'react';


const TodoForm = (props) =>{
    return (
        <div>
            <form onSubmit={props.addTask}>
                <input type="text" placeholder="Add Task" onChange={props.changeHandler} name="term" value={props.term}/>
                <button>Submit</button>
            </form>
        </div> 
    )
};

export default TodoForm;