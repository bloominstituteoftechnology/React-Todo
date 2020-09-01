import React from 'react';


class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: '',
        }
    }

    handleChanges = (e) => {
        this.setState({
            task: e.target.value
        })
    };


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.task)
    }



    render() {
        return (
            <form onSubmit={this.handleSubmit} >
    
                <input
                    type="text"
                    name="task"
                    placeholder="Add your task here"
                    value={this.state.task}
                    onChange={this.handleChanges} />
                <div>
                    <button className="add-btn">Add Task</button>
                </div>
                <div>
                    <button className="clear-btn" onClick={this.props.removeTask}>
                            Clear Todo List
                    </button>
                </div>
            </form>
            
        )
    }


}


export default TodoForm;