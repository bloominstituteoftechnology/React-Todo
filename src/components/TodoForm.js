import React from 'react'

const ToDoForm = ({handleOnChange, handleAddTodo, handleClearCompleted, buildingTask}) => {
    return (
        <div class="form-container">
            <input type='text' placeholder='...todo' onChange={handleOnChange} name='buildingTask'/>
            <button onClick={handleAddTodo}>Add todo</button>
            <button onClick={handleClearCompleted}>Clear Completed</button>
        </div>
    )
}
export default ToDoForm