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
        const space = { marginLeft: '30px' };
        return(
            <div style={show}>
                <div style={styles} onClick={this.handleClick}>
                    {this.props.text}
                    <button style={space} type='button' onClick={this.xOut}>Remove</button>
                </div>
            </div>
        );
    }
}

export default ToDo;