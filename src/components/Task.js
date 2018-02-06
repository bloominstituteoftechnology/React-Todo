import React from 'react';

class Task extends React.Component {
    state = {
            clicked: false
    };
    

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
export default Task;