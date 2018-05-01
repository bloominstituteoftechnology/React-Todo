import React from 'react';

const Todo = props => {
    return (
        <div>
            {props.todos.map((todo, index) => (
                <div key={todo + index}>{todo}</div>
            ))}
        </div>
    );
};

export default Todo;

// SOLUTION
// import React, { Component } from 'react';

// class Todo extends Component {
//     constructor() {
//         super();
//         this.state = {
//             clicked: false
//         };
//     }

//     handleClick = () => {
//         this.setState({ clicked: !this.state.clicked });
//     };

//     render() {
//         const styles = this.state.clicked ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
//         return (
//             <div style={styles} onClick={this.handleClick}>{this.props.todo}</div>
//         );
//     }
// }

// export default Todo;