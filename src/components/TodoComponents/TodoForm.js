import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();

        this.state = {
            newThings: '',
            //what is below?
            // moreStateProperties: 9,
            // evenMore: { name: 'Dustin' }
        };
    }
    handleChanges = e => {
        this.setState({
            newThings: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        console.log("On Fire!");
        // add our typed in item to the list!
        this.props.addThings(this.state.newThings);
        this.setState({ newThings: '' });
    };
    render() {
        console.log('rendering form');
        return (
            <form onSubmit={this.handleSubmit}>

                <label htmlFor="things">New Tasks  </label>
                <input
                    type="text"
                    name="things"
                    id="todo"
                    value={this.state.newThings}
                    onChange={this.handleChanges}
                />
                <button>Add</button>

            </form>
        );
    }
}

export default TodoForm;