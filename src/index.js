import React from 'react';
import { render } from 'react-dom';
import App from './App';
import ToDoList from './components/ToDoList';

const styles = {
    fontFamily: 'verdana',
    textAlign: 'left',
    fontColor: 'darkPink',
};


render(<App />, document.getElementById('root'));
