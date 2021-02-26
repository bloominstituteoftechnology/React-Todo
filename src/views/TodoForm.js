import React from 'react';
import '../App.css';


class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            task: ''
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitTask = e => {
        e.preventDefault();
        this.setState({task: ''});
        this.props.addTask(e, this.state.task)
    }

    render(){
        return(
            <div>
                <form className="TodoButtons" onSubmit={this.submitTask}>
                    <input
                        type="text" 
                        value={this.state.task} 
                        name="task"
                        onChange={this.handleChange}
                        />
                    <button> Add Todo</button>
                </form>
            </div>
        )
    }
}


export default TodoForm; 