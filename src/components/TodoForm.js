import React from 'react';

const TodoForm = props => {
    return (<form>
            <input placeholder="...todo" /> 
            <button>Add Todo</button>
            <button>Clear Completed</button>
    </form>)
}

export default TodoForm;