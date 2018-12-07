import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <form>
                <input type ='text' name ='inputText' placeholder='Enter task' />
                <button>Submit</button>
                <button>Clear completed</button>                    
                
            </form>
        </div>
    );

}

export default TodoForm;