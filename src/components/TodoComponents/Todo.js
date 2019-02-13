// `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.
import React from 'react';

export default function Todo ({ todoData }) {
    return (
        <div>{ todoData }</div>
    )
}