import React from 'react'

// class TodoForm extends React.Component {
//     constructor(props) {
//         super(props)
//         this.InitialState = {};
//         this.state = this.InitialState
//     }
//     handleAdd = event => {
//         const {item, value} = event.target
//         this.setState({
//             [item]: value,
//         })
//     }
//     submitAdd = () => {
//         this.props.addListItem(this.state)
//         this.setState(this.initialState)
//     }

//     submitClearAll = () => {
//         this.props.clearItems(this.state)
//         this.setState(this.initialState)
//     }

//     render() {
//         const {item} = this.state;
//         return(
//             <form>
//                 <label>New Item: </label>
//                 <input type="text" value={item} />
//                 <input type="button" value="Submit" onClick={this.submitAdd} />
//                 <input type="button" value="Clear All Items" onClick={this.submitClearAll} />
//             </form>
//         )
//     }
// }

// export default TodoForm
////////////////////////////////////////////////////

class TodoForm extends React.Component {
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
                        <button type="button" onClick={this.props.clearAll}> Clear All Items </button>
                    </form>

                </div>

            </div>
        )
    }
}

export default TodoList