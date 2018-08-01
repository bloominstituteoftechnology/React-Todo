import TodoForm from './TodoForm.js'
import TodoList from './TodoList.js'
import React from 'react';

class Todo extends React.Component {
    render(){
        return (
            <div>
                <TodoList />
                <TodoForm />
            </div>
        )
    }
}

export default Todo;