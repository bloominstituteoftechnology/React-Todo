import React from 'react';
import { render } from 'react-dom';
import App from './App';
import TodoList from "./TodoList";


var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <TodoList/>
    </div>,
    destination
);
render(<App />, document.getElementById('root'));
