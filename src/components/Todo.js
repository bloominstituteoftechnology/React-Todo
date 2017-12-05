import React, { Component } from 'react';

class ChildComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            clicked: false
        };
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        const styles = this.state.clicked ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
        return (
            <div style={styles} onClick={this.handleClick}>{this.props.todo}</div>
        );
    }
}

export default ChildComponent;

