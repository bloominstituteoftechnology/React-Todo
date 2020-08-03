import React from 'react'; 

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskText: ""
        } 
    }

    // state has been set in the constructor, now add functionality to handle changes to that state
    onChange = (e) => {
        this.setState({
            taskText: e.target.value
        });
    }; 
    // and add those changes to state 
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.taskText);
        this.setState({
            taskText: ""
        });
    };

    render() {
        return (
                <form onSubmit={this.onSubmit}>
                    <input 
                    type='text'
                    name='taskText'
                    placeholder='add a new to do!'
                    value={this.state.taskText}
                    onChange={this.onChange}
                    />
                    <button>Add Todo</button>
                </form>
        )
    }
}

export default TodoForm; 