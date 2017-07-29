import React, {Component} from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
class App extends Component {
    // stateful component
    constructor() {
        super();
        this.state = {
            todo: '',
            todoList: []
        };
        this.updateTodoHandler = this.updateTodoHandler.bind(this);
        this.submitTodoHandler = this.submitTodoHandler.bind(this);
    }

    updateTodoHandler(event) {
        this.setState({ todo: event.target.value });
    }

    submitTodoHandler() {
        const todoList = this.state.todoList;
        todoList.push(this.state.todo);
        this.setState({ todoList, todo: '' });
    }

    render() {
        return (
            <div>
                <TodoList
                    todos={this.state.todoList}
                />
                <TodoInput
                    todo={this.state.todo}
                    onTodoInput={this.updateTodoHandler}
                    onTodoSubmit={this.submitTodoHandler}
                />
            </div>
        );
    }
}

export default App;
