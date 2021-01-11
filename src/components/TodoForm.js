import React, { Component } from "react";

class TodoForm extends Component { // Ask: What state needs to live here? 
                                   // What bit of UI is unique to this *FORM* <--hint, hint***
                                   // AKA when a form is made for a user to interact with it,
                                   // User will naturally interact with the form's INPUT, so therefore
                                   // any user changes to the INPUT can be found in the event.target object
    constructor() {
      super();
      this.state = {
        inputValue: '',
      }
    }

    handleChanges = e => {
        this.setState({
          inputValue: e.target.value
        });
      };
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleItemAdd(this.state.inputValue);
        // console.log(this.state.inputValue);
        this.setState({
            inputValue: '',
        });
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Add a To-Do:
                    <br />
                    <input
                        value={this.state.inputValue}
                        onChange={this.handleChanges}
                        type="text"
                        name="todo"
                    >
                    </input>
                </label>
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;