import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
    // you will need a place to store your state in this component. design `App` to
    // be the parent component of your application. this component is going to take
    // care of state, and any change handlers you need to work with your state
    state = {
        tasks: [
            {
                id: 1,
                title: 'Take out the trash',
                completed: false
            }, {
                id: 2,
                title: 'Bake Cookies',
                completed: false
            },
        ]
    }

    // Toggles this.state.tasks[i].completed boolean
    markComplete = (id) => {
        this.setState({tasks: this.state.tasks.map(task => {
            if(task.id === id) {
                task.completed = !task.completed;
            }

            return task;
        })})
    }

    // Deletes completed tasks from tasks object array
    deleteTask = () => {
        this.setState({tasks: [...this.state.tasks.filter(task => task.completed === false)]});
    }

    // Adds a task to the tasks object array
    addTask = (title) => {
        const newTask = {
            id: Date.now(),
            title,
            completed: false
        }
        this.setState({tasks: [...this.state.tasks, newTask]})
    }

    render() {
        return (
            <div className="app">
                <div className="container">
                    <h2>Welcome to your Todo App!</h2>
                    <TodoForm addTask={this.addTask} deleteTask={this.deleteTask} />
                    <TodoList tasks={this.state.tasks} markComplete={this.markComplete} />
                </div>
            </div>
        );
    }
}

export default App;
