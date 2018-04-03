import React, {Component} from 'react';  

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false // false until proven true
        };
    }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked}); //now it's true. changing this.state.clicked
    }

    handleButton = () => {
        this.props.removeTodo(this.props.index);

    }
    render() { //about to return dynamic html 
        const styles = this.state.clicked? { textDecoration: 'line-through'} : { textDecoration: 'none'};
        return <div class="todoTask" style={styles} onClick={this.handleClick}>
            {this.props.todo}
            <button onClick={this.handleButton}>&times;</button>
          </div>; //curly brackets- variables. everything else is regular html.  JSX
    }
}

export default Todo; 