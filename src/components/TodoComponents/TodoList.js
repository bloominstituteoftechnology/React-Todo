// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

const todos = [
    {
        title: 'Eat Lunch',
    },
    {
        title: 'Eat post-lunch snacks',
    },
    {
        title: "Start thinking about what you'll eat for dinner"
    },
] 


const TodoList = () => {
return (
    <div>
        {todos.map(todo => (
            <Todo todoTitle={todo} />
        ))}
        <TodoForm />
    </div>
)
}

export default TodoList