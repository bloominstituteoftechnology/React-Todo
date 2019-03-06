import React from 'react';
import Todo from './Todo';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: '',
            id: '',
            completed: '',

        }
        
    }

    render() {
        return (
            <div>
            <form onSubmit={this.formSubmitHandler}>
                <input
                name="task"
                value={this.state.task}
                onChange={this.inputChangeHandler}
                placeholder="Task"
                />
                <input
                name="id"
                value={this.state.id}
                onChange={this.inputChangeHandler}
                placeholder="id"
                />
                <input
                name="completed"
                value={this.state.completed}
                onChange={this.inputChangeHandler}
                placeholder="true/false"
                />
                <button type="submit">Add Todo</button>
                <button type="submit">Clear Completed</button>
            </form>
            </div>
        );
    }
};

export default TodoForm