import React from 'react';
import Todo from './components/Todo.js';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: ['study', 'swim', 'travel'],
            newTodo: ''
        }
    }


    render() {
        return (
            <div>
                <p>Todos: </p>
                <ul>
                  {this.state.todos.map((todo) => {
                      return <Todo todo={todo}/>;
                  })}
                </ul>
            </div>
        )
    }
}

export default App;