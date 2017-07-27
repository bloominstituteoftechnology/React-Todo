import React, { Component } from 'react';

const styles = {
  fontFamily: 'Monospace',
  textAlign: 'center',
  // borderWidth: 2,
  borderBottomColor: 'skyblue',
  borderTopColor: 'skyblue',
  
};

class ToDoInputField extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ text: event.target.value });
    }

    handleSubmit(event) {
        const text = this.state.text;
        if (event.which === 13) {
            this.props.onSave(text);
            this.setState({ text: '' });
        }
    }

    render() {
        return (
            <input style={styles}
                type="text"
                placeholder="Add To-Do"
                value={this.state.text}
                onChange={this.handleChange}
                onKeyDown={this.handleSubmit}
            />
        );
    }
}

export default ToDoInputField;
