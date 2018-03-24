import React, { Component } from "react";
// import TodoList from './TodoList';
class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            clicked: false
        }
    }
   
    handleClick = () => {
        const clicked = this.state.clicked;
        this.setState({
            clicked: !clicked
        });

    }
    
    render() {
        const styles = this.state.clicked ? {textDecoration: 'line-through'} : {textDecoration: 'none'};
        return <div style={styles} onClick={this.handleClick}>{this.props.todo}</div>
    }
}

export default Todo;