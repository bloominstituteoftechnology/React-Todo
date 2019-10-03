import React from 'react';

class FormToDo extends React.Component {
    constructor() {
        super();

        this.state = {
            value: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.addItem(event, this.state.value)

        this.setState({
            value: ""
        })
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    placeholder="Add Task"
                    value={this.state.value}
                    onChange={this.handleChange}>
                </input>
                <button>Add To List</button>
            </form>
        );
    }
}

export default FormToDo;