import React from 'react';

const TodoForm = (props) => {
    return(
        <div>
            <form onSubmit={props.addTodo}>
                <input 
                    type="text"
                    name="newTodo"
                    value={props.value}
                    onChange={props.changeHandler}
                />
                <button type="submit" onClick={props.addTodo}>
                    add todo
                </button>

                <button>
                    Clear Completed
                </button>
            </form>
        </div>
    );
}

export default TodoForm;