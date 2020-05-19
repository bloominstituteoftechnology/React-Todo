/***************
 LIBRARIES
 ***************/
import React from 'react';

/***************
 COMPONENTS/DATA
 ***************/
import taskData from './taskData';
import TodoList from './components/TodoList';
import TodoForm from "./components/TodoForm";

class App extends React.Component {
    /***************
     SET STATE
     ***************/
    constructor() {
        super();
        this.state = {
            tasks: taskData,
            newTask: {task: '', id: Math.random() * 100, completed: false},
        };
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleTaskCompletion = this.handleTaskCompletion.bind(this);
    }

    /***************
     EVENT HANDLERS
     ***************/
    handleFormChange(event) {
        this.setState(state => ({
            newTask: {
                ...state.newTask,
                task: event.target.value
            }
        }))
        console.log(this.state.tasks);
    }

    handleTaskCompletion(event) {
        let incompleteTask = this.state.tasks.find(task => task.task === event.target.id);
        let index = this.state.tasks.indexOf(incompleteTask);
        let completedTask = {};

        Object.assign(completedTask, incompleteTask);
        completedTask.completed = !completedTask.completed;
        console.log(completedTask);

        this.setState(this.state.tasks[index] = completedTask)
    }

    handleFormSubmit(event) {
        event.preventDefault();
        this.setState(state => ({
            tasks: [...state.tasks, state.newTask],
            newTask: {task: '', id: Math.random() * 100, completed: false}
        }))
    }

    /***************
     COMPONENT
     ***************/
    render() {
        return (
            <div>
                <h2>Welcome to your Todo App!</h2>
                <TodoList taskData={this.state.tasks} handleTaskCompletion={this.handleTaskCompletion}/>
                <TodoForm handleFormChange={this.handleFormChange} handleFormSubmit={this.handleFormSubmit}
                          newTask={this.state.newTask}/>
            </div>
        );
    }
}

export default App;
