import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            input: ""
        };
    }

    handleChange = event => {
        this.setState({
            task:event.target.value

        });
    }

        handleSubmit = event => {
            event.preventDefault();
            this.props.addTask(this.state.task);
            this.setState({
                task: ""
            });
        };
        render() {

            return (
                <form onSubmit={this.handleSubmit}>
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