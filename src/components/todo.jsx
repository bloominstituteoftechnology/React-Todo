import React, { Component} from "react";

class todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            todo: this.props.todo
        };
    }

    render() {
        return (
            <div style={{ textDecoration: this.state.clicked ? "line-through" : "none" }}
            onClick={e => this.setState({ clicked: !this.state.clicked })}> {this.state.todo} </div>
        );
    }
}

export default todo;