import React from 'react';

export default class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            desc:""
        }
    }

    addTodo = e => {
        e.preventDefault()
        this.props.handleAddTodo(this.state.desc)
        this.setState({ desc: "" })
    }

    render() {
        return (
            <form onSubmit={this.addTodo}>
                <input
                    type="text"
                    name="desc"
                    value={this.state.desc}
                    onChange={e => this.setState({ desc: e.target.value })}
                />
                <button>Submit</button>
            </form>
        )    
    }
    
}