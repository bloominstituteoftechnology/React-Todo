import React from 'react';

const TodoList = props => {
    return(
        <div>
            <h1> {props.data.title}</h1>
            
            <div>
                <form>
                    <input placeholder='Todo Task' />
                    <button>Add Todo List</button>
                    <button>Clear Todo List</button>
                </form>
            </div>
        </div>
    )
}

export default TodoList;