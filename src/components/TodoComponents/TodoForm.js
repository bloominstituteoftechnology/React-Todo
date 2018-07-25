import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input type="text" name="todo" value="...todo" />
            <input type="submit" value="Add Todo" />
            <button>Clear Completed</button>
        </form>
    );
};

export default TodoForm;