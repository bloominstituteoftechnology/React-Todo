import React from 'react';

const TodoForm = () => {
    return(
        <div>
            <p>TodoForm</p>
            <form>
                <input
                    type='text' 
                    name='newItem' 
                    placeholder='Add to List'
                />
                <button>Add to List</button>
                <button>Clear Purchased</button>
            </form>
            
        </div>
    )
}

export default TodoForm