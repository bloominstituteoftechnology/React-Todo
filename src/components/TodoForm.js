import React from 'react';

class TodoForm extends React.Component {

    render() {
        return (
            <form>
                <input 
                    type="text"
                    name="task"
                    id="task"
                />
                <button>Add Task</button>
                <button>Clear Completed</button>
            </form>
            
        )
    }
}

export default TodoForm