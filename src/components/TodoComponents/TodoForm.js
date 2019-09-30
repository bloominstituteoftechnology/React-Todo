import React from 'react';

class TodoForm extends React.Component {

    render() {
        return(
            <form>
                <input type='text' placeholder='...todo' onChange/>
                <button onClick>Add Todo</button>
                <button onClick>Clear Completed</button>
            </form>
        )
    }

}

export default TodoForm;