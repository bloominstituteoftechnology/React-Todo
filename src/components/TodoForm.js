import React from 'react'


class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            form: ''
        }
    }
    onChange = e => {
        this.setState({ form: e.target.value })
    }
    submit = e => {
        e.stopPropagation()
        e.preventDefault()
        this.props.addTodo(this.state.form)
        this.state.form = ''
    }
    render() {
        return (
            <form onSubmit={this.submit}>
                <input
                    type='text'
                    value={this.state.form}
                    onChange={this.onChange}

                ></input>
                <button>submit</button>
            </form>
        )
    }
}
export default TodoForm