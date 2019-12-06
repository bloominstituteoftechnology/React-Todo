import React from 'react';

class ToDoForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            newItem: ''
        }
    }

    handleInputChange = event => this.setState({newItem: event.target.value});

    handleSubmit = event => {
        event.preventDefault();
        this.props.addItem(this.state.newItem);
        this.setState({
            newItem: ''
        });
    }

    render(){
        return(
        <form onSubmit={(e) => this.handleSubmit(e)}>
            <input onChange={e => this.handleInputChange(e)} type='text' placeholder="New Task" value={this.state.newItem}></input>
            <input type='submit'></input>
        </form>
        );
    }
}

export default ToDoForm;