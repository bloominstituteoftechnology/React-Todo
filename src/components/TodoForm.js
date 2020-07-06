import React from 'react'

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            task: ''
        };
    }

    handleChanges = e => {
        this.setState({ 
            [e.target.name]: e.target.value 
        })
    };

    submitTask = e => {
        e.preventDefault();
        this.setState({ task: '' });
        this.props.addTask(e, this.state.task);
    }

    render() {
        return(
            <div className='form'>
                <form onSubmit={this.submitTask}>
                    <input
                        type='text'
                        value={this.state.task}
                        name='task'
                        onChange={this.handleChanges}
                    />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default TodoForm

