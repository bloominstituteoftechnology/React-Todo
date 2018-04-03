import React from 'react';
import { render } from 'react-dom';
import App from './App';
import TodoList from './ToDo';


// TodoInput(parent)(form & button)
//     TodoList(items)

class TodoInput extends React.Component {
    constructor() {
        super();
        this.state = {
            todoItem: "",
            todoList: []
        }
    };
    render() {
        return (
            <div>
            <h1>TEST</h1>
            </div>
        );
    }
}
export default TodoInput;
render(<App />, document.getElementById('root'));
