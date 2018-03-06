import React, { Component} from 'react';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false
        };
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        console.log(this.props);
        const styles = this.state.clicked ? {textDecoration : 'line-through'} : {textDecoration : 'none'};
        return (
            <div style={styles} onClick={this.handleClick}>{this.props.todo}</div>
        );
    }
}

export default Todo;