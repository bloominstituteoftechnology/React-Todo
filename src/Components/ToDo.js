import React, { Component } from 'react';


class Todo extends Component {
    constructor() {
        super();
        this.state = {            
            clicked: false
        };
    };

    handleClicker = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    

    render() {
        const styles = this.state.clicked ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
        return (
        <div style={styles} onClick={this.handleClicker}>{this.props.thing}</div>
    )
}
}


export default Todo;