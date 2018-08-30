import React from 'react';

const TodoForm = (props) => {
    return (
        <form>
            <input type="text" value={props.inputText} onChange={props.updateInput}/>
            <div className="buttons">
                <button className="add-item" onClick={props.updateTodo}>Add Item</button>
                <button className="clear-completed" onClick={props.clearCompleted}>Clear Completed</button>
            </div>
        </form>

    );
}

export default TodoForm;