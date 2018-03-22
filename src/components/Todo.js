import React, {Component} from 'react';  

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false // false until proven true
        };
    }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked}); //now it's true. changing this.state.clicked
    }
    render() { //about to return dynamic html 
        const styles = this.state.clicked? { textDecoration: 'line-through'} : { textDecoration: 'none'};
        return (
            <div style= {styles} onClick= {this.handleClick}>
            {this.props.todo}
            </div> //curly brackets- variables. everything else is regular html.  JSX
        );
    }
}

export default Todo; 