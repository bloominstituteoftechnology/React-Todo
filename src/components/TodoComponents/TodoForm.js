import React from 'react'


class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {task: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            task: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addTodoTask({task: this.state.task, id: Date.now(), isCompleted: false});
        // this.props.handleClickClear;
        this.setState({task: ''});
    }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label className="label">
                    <input className="main-input" type="text" value={this.state.task} onChange={this.handleChange} placeholder="What needs to get done?"/>
                </label>

                <button className="hide-button" type="submit">Add Todo</button>
            </form>

            <button className="hide-button" onClick={this.props.clearCompleted}>Clear Completed Task</button>
        </div>
        )
    }
}// class TodoForm

export default TodoForm