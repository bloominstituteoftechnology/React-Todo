import React from 'react';
import './Todo.css';

class ToDoForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            'input': '',
        }
    }

    changeHandler = event => {
        this.setState({ input: event.target.value });
      }

    handleAdd = () => {
        let text = this.state.input;
        console.log(text);
        let task = {
            task: text,
            id: Date.now(),
            completed: false,
        };
        this.props.FormHandle(task);
        this.setState({ input: '' })
    }

    render() {
        return (
            <div>
                <input
                type="text"
                onChange={this.changeHandler}
                placeholder="What to do?"
                value={this.state.input}
                />
                <button onClick={this.handleAdd}>Add To Do</button>
                <button>Clear Completed</button>
            </div>
        );
    }
}

export default ToDoForm;