import React from 'react';
import { render } from 'react-dom';
import App from './App';

const App = () => (
    <div>
        <TodoList />
    </div>
);


render(<App />, document.getElementById('root'));
