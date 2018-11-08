import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

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
    };

    // clearTasks = event => {
    //     event.preventDefault();
    //     this.setState({
    //         tasks: this.state.tasks.filter(task => task.completed)
    //     });
    // };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        return (
            <>
                <TodoList todoList={this.state.tasks} />
                <TodoForm
                    addTask={this.addTask}
                    inputText={this.state.taskInput}
                    handleChange={this.handleChange}
                    addTask={this.addTask}
                    // clearTasks={this}
                />
            </>
        );
    }
}

export default App;
