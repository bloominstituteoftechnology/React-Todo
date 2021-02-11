import React from 'react';


class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
        task: ''
    }
}


    changeHandler = e => {
        this.setState({task: e.target.value})
    }


    submitHandler = e => {
        e.preventDefault();
        this.setState({ task: ''})
        this.props.addTask(this.state.task, e)
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input 
                type='text'
                name='task'
                value={this.state.task}
                onChange={this.changeHandler}
                placeholder='add a new task here'
            />
            <button className='add-btn'>Add Task</button>
            </form>
        )
    }
}


export default TodoForm;