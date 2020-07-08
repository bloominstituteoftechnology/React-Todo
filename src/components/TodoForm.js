import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            task: "",
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value

        });
    }
    
    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            task: ""
        });
        this.props.addTask(this.state.task);
        
    };

    render() {
        
        return (
            <form onSubmit={this.handleSubmit} >
                <input
                    type="text"
                    name="task"
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <button>Add Task</button>


            </form>
        )
    }

}


export default TodoForm;