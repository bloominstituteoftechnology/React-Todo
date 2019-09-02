import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import _ from 'lodash';
import styled from 'styled-components';

//components
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const AppContainer = styled.div`
    width: 600px;
    margin: 0 auto;
    background-color: white;
    border: 1px solid grey;
    border-radius: 30px;
    box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.5);
    padding: 20px;
    margin-top: 20px;

    h2 {
        text-align: center;
        margin-bottom: 20px;
    }
`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: JSON.parse(localStorage.getItem('todos')) || [],
            taskValue: '',
            hideCompleted: false,
        };
    }

    componentDidUpdate() {
        localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }

    handleTaskChange = e => {
        this.setState({ taskValue: e.target.value });
    };

    handleSubmit = () => {
        this.setState({
            todos: [
                ...this.state.todos,
                { id: new Date(), task: this.state.taskValue, complete: false },
            ],
            taskValue: '',
        });
    };

    handleHideCompleted = () => {
        this.setState({
            hideCompleted: this.state.hideCompleted ? false : true,
        });
    };

    handleCompleted = e => {
        let todos = this.state.todos;
        let indexOfTodo = _.findIndex(todos, todo => {
            return todo.id == e.target.id;
        });
        todos[indexOfTodo].complete = true;
        this.setState({ todos: todos });
    };

    handleDeleteTask = e => {
        console.log(e.target.id);
        let todos = this.state.todos;
        _.remove(todos, todo => {
            return todo.id == e.target.id;
        });
        this.setState({ todos: todos });
    };

    render() {
        return (
            <AppContainer>
                <h2>Welcome to your Todo App!</h2>
                <TodoList
                    todos={this.state.todos}
                    handleDeleteTask={this.handleDeleteTask}
                    handleCompleted={this.handleCompleted}
                    hideCompleted={this.state.hideCompleted}
                    handleHideCompleted={this.handleHideCompleted}
                />
                <TodoForm
                    value={this.state.taskValue}
                    handleTaskChange={this.handleTaskChange}
                    handleSubmit={this.handleSubmit}
                />
            </AppContainer>
        );
    }
}

export default App;
