import React from 'react';
import { render } from 'react-dom';
import App from './App';
import TodoList from './TodoList';

const App = () => (
    <div>
        <h1>To Do App</h1>
        <TodoList />
    </div>
)

render(<App />, document.getElementById('root'));
