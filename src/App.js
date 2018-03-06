import React, { Component } from 'react';
import TodoList from './components/TodoList';

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
              <TodoList />
            </div>
        );
    }
}

export default App;