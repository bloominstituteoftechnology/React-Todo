import React from 'react';

function TodoForm(){
    return(
        <div>
            <form>
                <input type="text" placeholder="What Do You Need To Do Today?" />
                <div>
                    <button>Add Todo</button>
                    <button>Clear Completed</button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm;
