import React from 'react';

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <div>
                <h4>this is a Todo component</h4>
                {/* {console.log(this.props.toDo)} */}
                <h4>{this.props.toDo.task}</h4>
            </div>
        )
    }
}

export default Todo