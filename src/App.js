import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import styled from 'styled-components';

const StyledApp = styled.div`
    margin: 0 auto;
    width: 50vw;
    height: 90vh;
    height: calc(* 2);
    padding: 50px;
    box-shadow: 0 5px 10px 0 #757575, 0 4px 5px 0 #a8a8a8;
    background-color: #251635;
`;
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            taskInput: ''
        };
    }

    componentDidMount() {
        const storedTasks = JSON.parse(localStorage.getItem('tasksList'));
        if (storedTasks) {
            this.setState({
                tasks: storedTasks
            });
        }
    }

    componentDidUpdate() {
        localStorage.setItem('tasksList', JSON.stringify(this.state.tasks));
    }

    addTask = event => {
        event.preventDefault();
        if (event.target[0].value !== '') {
            this.setState({
                tasks: [
                    ...this.state.tasks,
                    {
                        task: this.state.taskInput,
                        id: Date.now(),
                        completed: false
                    }
                ],
                taskInput: ''
            });
        }
    };

    clearTasks = event => {
        event.preventDefault();
        this.setState({
            tasks: this.state.tasks.filter(task => task.completed === false)
        });
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    completeTask = id => {
        this.setState({
            tasks: this.state.tasks.map(task => {
                if (task.id === id) {
                    return {
                        ...task,
                        completed: task.completed === false ? true : false
                    };
                } else return task;
            })
        });
    };

    render() {
        return (
            <StyledApp>
                <TodoList todoList={this.state.tasks} completeTask={this.completeTask} />
                <TodoForm
                    addTask={this.addTask}
                    inputText={this.state.taskInput}
                    handleChange={this.handleChange}
                    clearTasks={this.clearTasks}
                />
            </StyledApp>
        );
    }
}

export default App;
