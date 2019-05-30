import React from 'react';
import { render } from 'react-dom';
import App from './App';

const toDo = 
[
    {
    task: 'Get Up ON TIME!!',
    id: 14,
    completed: false   
    },
    {
    task: 'Like For Real This Time (Get Up)',
    id: 15,
    completed: false
    },
    {
    task: 'Brush your teeth',
    id: 16,
    completed: false
    },
    {
    task: 'Start Doing Parkour',
    id:340940,
    completed: false
    }
]

render(<App />, document.getElementById('root'));
