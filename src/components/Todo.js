import React, { Component } from 'react';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
            delete: false,
        };
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
        console.log('clicked')
    }
    
    delete = () => {
      
      if (this.props.data.length !== 0) {
        console.log("button works");
        this.setState({ delete: !this.state.delete })
      }
    }

    render() {
        const styles = this.state.clicked ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
        const styleDel = this.state.delete ? {display: 'none'} : {display: 'inline'}
        return (
          <div style = {styleDel}>
            <div style={styles} onClick={this.handleClick}>
              {this.props.data}
              <span><button onClick={this.delete}>x</button></span>
            </div>
          </div>
        );
    }
}

export default Todo;