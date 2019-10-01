import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
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
            <div>
                <form onSubmit={this.submitItem}>

                    <input
                        type='text'
                        name='item'
                        value={this.item}
                        onChange={this.handleChanges}

                    />
                    <button>Add Todo</button>

                </form>

            </div>
        );
    }


}

export default TodoForm;