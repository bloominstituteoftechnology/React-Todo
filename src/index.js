import React, { Component } from 'react';
import { render } from 'react-dom';
import TodoList from './App';

const styles = {
    textAlign: "center"
};

class App extends Component {
    constructor() {
        super();
        this.state = {
            newTodo: '',
            todos: ['starting item']
        };
    }
    handleAddTodo = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmitTodo = () => {
        const { todos } = this.state;
        if (this.state.newTodo !== '') todos.push(this.state.newTodo);
        this.setState({ todos, newTodo: '' });
    };

    handleCheckTodo = e => {
        console.log('YOU CHECKED IT BRUV');
        // this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div style={styles}>
                <TodoList
                    // {...<button onClick={() => console.log('hi')}>
                        {...this.state}
                    // </button>}
                />
                <input
                    type="text"
                    name="newTodo"
                    value={this.state.newTodo}
                    placeholder="add todo"
                    onChange={this.handleAddTodo}
                />
                <button onClick={this.handleSubmitTodo}>Add Todo</button>
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));
