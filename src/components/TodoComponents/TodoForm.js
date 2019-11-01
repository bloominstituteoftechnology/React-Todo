import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            itemName: ''
        };
    }
    handleChanges = event => {
        this.setState ({
          itemName : event.target.value
        })
      }
      handleSubmit = event => {
        event.preventDefault();
        if(this.state.itemName !== ''){
          this.props.addItem(this.state.itemName);
          this.setState({
            itemName:''
          });
        }
    }
    render() {
        console.log('rendering form')
        return(
            <form onSubmit = {this.handleSubmit}>
                <input
                onChange = {this.handleChanges}
                type='text'
                value={this.state.itemName}
                />
                <button>Submit</button>
            </form>
        );
    }
}

export default TodoForm;