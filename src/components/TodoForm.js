import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo:''
        };
    };
    handleChanges = e => {
        this.setState({
           todo: e.target.value
        });
    };

    handleSubmit = e => {
       e.preventDefault();
       this.props.addTodo(this.state.todo);
       this.setState({
           todo: ''
       });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='todoText'
                    onChange={this.handleChanges}
                    value={this.state.todo}
                />
                <button className='submittingForm' onSubmit={this.handleSubmit}>
                    Add Todo
                </button>       
            </form>
        )
   }
}

export default TodoForm;