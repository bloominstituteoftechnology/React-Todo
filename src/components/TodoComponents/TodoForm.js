import React from 'react'


class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {task: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.props.printTodoTask
        this.setState({
            task: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        // this.props.addTodoTask({task: this.props.addTextInput, id: Date.now(), isCompleted: false});
        this.props.addTodoTask({task: this.state.task, id: Date.now(), isCompleted: false});
        this.props.handleClickClear;
        this.props.clearCompleted;
        this.setState({task: ''});
    }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label class="label">
                    <input class="main-input" type="text" value={this.state.task} onChange={this.handleChange} placeholder="What needs to get done?"/>
                </label>

                <button class="hide-button" type="submit">Add Todo</button>
            </form>

            <button class="show-button" onClick={this.props.clearCompleted}>Clear Completed Task</button>
        </div>
        )
    }
}// class TodoForm

export default TodoForm