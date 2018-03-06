import React, { Component } from 'react';


class ToDo extends Component {
    constructor() {
        super();

        this.state = {
            
            clicked: false,
            xed: false
        };
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    xOut = () => { 
        this.setState({ xed: !this.state.xed});
    };

    render() {
        const styles = this.state.clicked ? { textDecoration: 'line-through'} : { textDecoration: 'none' };
        const show = this.state.xed ? {display: 'none'} : {display: 'flex'};
        return(
            <div style={show}>
                <div onClick={this.xOut}>X</div>
                <div style={styles} onClick={this.handleClick}>{this.props.text}</div>
            </div>
        );
    }
}

export default ToDo;