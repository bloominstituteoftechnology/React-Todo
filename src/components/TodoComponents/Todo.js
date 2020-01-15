import React, { Component } from 'react';

class Todo extends Component {
    
    
    
    render() {
        return (
            <div>
                {console.log(this.props)}
                <p className={this.props.data.completed ? "Confirmed" : "List"}>{this.props.data.task}
                <button onClick={e => this.props.markAsCompleted(this.props.index)}> Mark As Completed </button>
                </p>
            </div>
        );
    }
}

export default Todo;