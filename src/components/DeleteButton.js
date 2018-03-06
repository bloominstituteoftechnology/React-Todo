import React, { Component} from 'react';

class DeleteButton extends Component {
    constructor() {
        super();
        this.state = {
            completed: false
        };
    }

    handleCompleted = () => {
        this.setState({ completed: !this.state.completed });
    };

    render() {
        console.log(this.props);
        const styles = this.state.completed ? {textDecoration : 'line-through'} : {textDecoration : 'none'};
        return (
            <div style={styles} onClick={this.handleCompleted}>{this.props.todo}</div>
        );
    }
}


export default DeleteButton;