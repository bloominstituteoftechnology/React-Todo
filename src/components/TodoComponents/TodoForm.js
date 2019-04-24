import React from 'react';


class TodoForm extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
            <form onSubmit={this.props.submit}>
                <input
                name="task"
                value={this.props.task}
                onChange={this.props.input}
                placeholder="What Do You Have To Do?"/>
             
                <button type="submit">Add</button>
                {/* <button type="submit">Clear</button> */}
            </form>
            </div>
        );
    }
};

export default TodoForm