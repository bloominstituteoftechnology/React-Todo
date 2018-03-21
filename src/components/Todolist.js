// Import React from react.
import React from 'react';

// Create a const arrow function called MoviesList.



const TodoList = (props) => {

    const checkbox = (completed) => {

        return (
            <div>
                {/* <input type="checkbox" { completed ? checked : '' } /> */}
            </div>
        )

    }

    return (
        <div>
        <ul>
            {props.todos.map((todo, i) => {
                return <li key={i}>{checkbox(todo.completed)}{todo.todo}
                </li>;
            })}
        </ul>
        </div>
    )
}

export default TodoList;

// Return an unordered list
// Inside the unordered list, embed a javascript expression (curly brackets).
// Inside the javascript expression, map the movies array
// The function inside map should take in two arguments, movie and i (for index).
// The function should return a list item, with a javascript expression movie (the same variable as map).
// The list item should have an attribute called key, that takes in i as a javascript expression.
// Outside the arrow function, export the function MoviesList as a default.
