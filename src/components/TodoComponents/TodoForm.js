import React from 'react';


const TodoForm = props => {
    return (
        <form>
            <input 
                type='text' 
                placeholder='ToDo' 
                name='Todo' 
                className='todoInpu'
                onChange='text'
            />

            <button>Add ToDo</button>
            <button>Clear Completed</button>

        </form>
    );
};

export default TodoForm;
