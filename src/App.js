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
    }

    //left off working on this...need to change state of the specific task so that completed is true.
    /*    handleTaskCompletion(event) {
            this.setState(state => ({
                tasks: [...state.tasks, state.newTask],
            }))
        }*/

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
                <TodoList taskData={this.state.tasks}/>
                <TodoForm handleFormChange={this.handleFormChange} handleFormSubmit={this.handleFormSubmit}
                          newTask={this.state.newTask}/>
            </div>
        );
    }
}

export default App;
