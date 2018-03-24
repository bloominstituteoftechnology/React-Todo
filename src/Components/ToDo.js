import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            style: 'none',
        }
    }
    clickHandler = (e) => {
        const clicked = this.state.clicked;
        const style = !clicked ? "line-through" : "none";
        this.setState({clicked: !clicked, style});
    }

    render() {
        const styles = {textDecoration: this.state.style};
        return (
            <div style = {styles} onClick = {this.clickHandler}>{this.props.todo}</div>
        )
    }
}

export default Todo;