// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
//////////////////////////////////////////////////////
// class TodoList extends React.Component {
//     constructor(props) {
//         super(props)
//         this.InitialState = {};
//         this.state = this.InitialState
//     }
//     render() {
//         return (
//             <form onSubmit={this.listArray} />
//         )
//     }
// }

// export default TodoList
///////////////////////////////////////////////////
// CODE FROM TUTORIAL

class TodoList extends React.Component {
    componentDidUpdate() {
        this.props.inputElement.current.focus()
    }
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <h1>Todo App</h1>
                    <form onSubmit={this.props.addItem}>
                        <input 
                            placeholder="task" 
                            ref={this.props.inputElement}
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput}
                        />
                        <button type="submit"> Add Task </button>
                        <button type="button"> Clear All Items </button>
                    </form>

                </div>

            </div>
        )
    }
}

export default TodoList