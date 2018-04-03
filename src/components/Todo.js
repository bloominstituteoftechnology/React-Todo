import React from "react"

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            {this.props.todo}
            </div>
        );
    }
}

export default Todo;