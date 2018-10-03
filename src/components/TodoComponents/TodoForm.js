import React from 'react';


const TodoForm = props => {
    return (
        <div>
            <form onSubmit={props.addNewItem}>
                <input
                    type="text"
                    name="newItem"
                    placeholder="...todo"
                    value={props.newItem}
                    onChange={props.changeHandler}
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