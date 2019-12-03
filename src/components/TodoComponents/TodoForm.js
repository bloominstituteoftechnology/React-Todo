import React from 'react';

class  FormInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newItem: ''
        };
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.addItem(this.state.newItem);
        this.setState({
            newItem: ''
        });
        console.log('eventtargetvale', event.target.value)
    };
    handleChanges = event => {
        this.setState({ newItem: event.target.value });
    };

   render() {
    return(
        <form onSubmit={this.handleSubmit}>
        <input 
        value={this.state.newItem}
        onChange={this.handleChanges}
        type='text'
        name='item'
        />
        <button
        > Add ToDo </button>
        </form>)
}
}

export default FormInput