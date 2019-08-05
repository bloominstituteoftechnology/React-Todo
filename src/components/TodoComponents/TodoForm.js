import React from 'react';

class extends React.Component {
    constructor() {
        super();

        this.state = {
            task: '',
        };
    }

    handleChanges = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

    submitItem = e => {
        e.preventDefault();
        this.props.addItem(this.state.item);
    };

    render() {
        return (
        
                <form onSubmit={this.submitItem}>
                    <input
                        type="text"
                        placeholder='...todo'
                        value={this.state.item}
                        name="item"
                        onChange={this.handleChanges}
                    />
                    <button>Add Todo</button>
                    <button>Clear Completed</button>
                </form>
            
        )
    }
}

export default TodoFrom