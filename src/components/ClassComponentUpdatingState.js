import React, { Component } from 'react';

class ClassComponentUpdatingState extends Component {
    constructor() {
        super();
        this.state = {
            aNumber: 8
        };
    }

    increment = () => {
        let n = this.state.aNumber;
        this.setState({ aNumber: ++n })
    };
}

decrement = () => {
    let n = this.state.aNumber;
    this.setState({ aNumber: --n })
};

render() {
    return (
        <div>
            <div>{'Our number: ${this.state.aNumber}'}</div>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
        </div>
    );
}
}

export default ClassComponentUpdatingState;