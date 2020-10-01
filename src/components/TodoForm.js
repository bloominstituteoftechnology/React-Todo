import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            newTask: ""
        };
    };

    handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        this.setState({
        ...this.state,
        newTask: e.target.value
        });
    };
    
    submitTask = (e) => {
        e.preventDefault();
        console.log("submitted");
        this.props.addTask(this.state.newTask);
        this.setState({ ...this.state, newTask: "" });
    };


    render() {
        return(
            <div>
                <form onSubmit={this.submitTask} >

                    <input type="text" name="task" value={this.newTask} onChange={this.handleChange} />
                    
                    <button className="addButton" >
                        Add Task
                    </button>

                </form>

                <button className="clearButton" onClick={this.props.clearCompleted} >
                    Clear Completed
                </button>
            </div>
        );
    };

};

export default TodoForm;