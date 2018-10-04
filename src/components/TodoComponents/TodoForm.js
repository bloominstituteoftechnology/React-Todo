import React from 'react';

const TodoForm = (props) => {
    return(
        <div>
            <form>
                <input 
                    type="text"
                    name="newTodo"
                    value={props.newTodo}
                    onChange={props.changeHandler}
                    placeholder="Enter todo here"
                />
                <button onClick={props.addTodo}>
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