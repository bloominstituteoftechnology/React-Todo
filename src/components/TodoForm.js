import React from 'react'

const TodoForm = props => {
        
    return (
        <div>
            <form>
                <input 
                    value={props.value}
                    name="todo"
                    placeholder="Add New Item"
                    onChange={props.handleTodoChange}
                    type="text"
                />
                <button
                    onClick={props.handleAddTodo}
                >
                    Submit
                </button>
            </form>
            <button 
                onClick={props.handleClearTodos}
            >
                Clear
            </button>
        </div>
    )
}

export default TodoForm