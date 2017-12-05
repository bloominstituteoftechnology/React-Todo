import React, { Component } from 'react';

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
        const style1 = { textDecoration: 'line-through', width: '200px', float: 'left'};
        const style2 = { textDecoration: 'none', width: '200px', float: 'left'};
        let styles = this.state.clicked ? style1  : style2;
        return (
            <div style={styles} onClick={this.handleClick}>
                {this.props.thing}
            </div>
        );
    }
}

export default Todo;