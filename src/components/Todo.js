// Import React from react.
import React from 'react';
// eslint-disable-next-line
import TodoList from './Todolist';

// Create a const arrow function called MoviesList.



const Todo = (props) => {

    return (
        <div>
            {/* {props.todos.map((todo, i) => {
                return <p key={i}>{checkbox(todo.completed)}{todo.todo}
                </p>;
            })} */}
        </div>
    )
}

export default Todo;

// Return an unordered list
// Inside the unordered list, embed a javascript expression (curly brackets).
// Inside the javascript expression, map the movies array
// The function inside map should take in two arguments, movie and i (for index).
// The function should return a list item, with a javascript expression movie (the same variable as map).
// The list item should have an attribute called key, that takes in i as a javascript expression.
// Outside the arrow function, export the function MoviesList as a default.
