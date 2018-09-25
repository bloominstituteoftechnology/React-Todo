//<Todo /> is a component that takes in the todo data and displays the task to the screen.
import React from 'react';
import './Todo.css';

const Todo = () => {
    <div>
        {this.state.data.map(data => (
            <div key={data.id}>
            {data.task}
            </div>
        ))}
    </div>
}

export default Todo;