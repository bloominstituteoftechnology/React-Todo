import React from 'react';


class TodoForm extends React.Component  {
    constructor() {
        super();
        this.state = {
            task: '',
            id: '',
            completed: ''
        }
    }
    keypressHandler = event => {
        if (event.which === 13) {
            this.setState({
                task: event.target.value,
                id: Date.now(),
                completed: false
            });
            event.target.value = "";
        }
        
    }
    render() {
        return (
            <div className="todo-form">
                <div>{this.state.task}</div>
                <input type="text" onKeyPress={this.keypressHandler} />
                <button type='submit'>Submit</button>
                <button className='cleared'>Clear Completed</button>
            </div>
        )
    } 
}

export default TodoForm