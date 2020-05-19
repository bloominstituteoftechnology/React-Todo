import React from 'react';


class Todo extends React.Component {
    render() {
        return (
            <div style={{borderStyle: "solid", padding: "15px"}}>
                <h2>{this.props.task.task}</h2>
                <p>Completed? {this.props.task.completed ? "Yes" : "Not yet"}</p>
                <button id={this.props.task.task} onClick={(event) => {
                    event.persist();
                    this.props.handleTaskCompletion(event)
                }}>Mark Completed
                </button>
            </div>
        );
    }
}

export default Todo;



