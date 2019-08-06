import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ""
        };
    }

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    submitTask = event => {
        event.preventDefault();
        this.props.addTask(this.state.input);
    };




    render() {
        return (
           <form onSubmit={this.submitTask}>
               <input
                    type="text"
                    value={this.state.input}
                    name="input"
                    onChange={this.handleChanges}
               />
               <button>
                   New Task
               </button>
           </form>
        )
    }
}

export default TodoForm






// const TodoForm = (props) => {
//     console.log(props)
//     return (
//         a 
//     )
// }