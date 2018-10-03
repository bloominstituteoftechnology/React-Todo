import React from 'react';


const TodoForm = props => {
    return (
        <div>
            <form onChange={props.changeHandler}>
                <input
                type="text"
                name="newItem"
                placeholder="...todo"
                value={props.newItem}
                />
                <button type="submit" onClick={props.addNewItem}>
                Add Todo
                </button>
                <button>
                Clear Completed
                </button>
             </form>
        </div>
    )
}

export default TodoForm;