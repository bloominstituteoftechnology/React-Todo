import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input id="inputBtn" placeholder="To Do Task..." type="text" name="todo" value={props.value}/>
            <button onClick={props.add}>Add To List</button>
            <button>Clear Completed</button>
        </form>
    );
};

export default TodoForm;