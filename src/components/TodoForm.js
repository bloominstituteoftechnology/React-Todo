import React from "react";

// const TodoForm = (props) => {  
//     return (
//         <form>
//             <input 
//             placeholder="to do here"
//             onChange={props.onChange} />
//             <button>Submit</button>
//         </form>
//     )
// }

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            formValue: ''
        }
    }

    handleInputChange = (event) => {
        this.setState({formValue: event.target.value})
      }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleToDoAdd(this.state.formValue);
        this.setState({
            formValue:''
        });
        // console.log(this.state.formValue);
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.formValue} onChange={this.handleInputChange} type='text' name='todo' />
            <button>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm;