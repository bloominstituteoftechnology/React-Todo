import React from "react";

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
          inputValue: ""
        }
      }

      handleChange = (evt) => {
        this.setState ({
            inputValue: evt.target.value
        }
        )
      }

      handleSubmit = (evt) => {
          evt.preventDefault();  
          this.props.handleAdd(this.state.inputValue)
          this.setState({inputValue:""})
      }
      
      handleClear = (evt) => {
        evt.preventDefault();
          this.props.handleFilter()
      }

      render() {
          return (
            <form >
                <input value = {this.state.inputValue} onChange={this.handleChange} type="text" name="item" placeholder = "...todo" />
                <button onClick = {this.handleSubmit}>Add Todo</button>
                <button onClick = {this.handleClear}>Clear Completed</button>
                
            </form>      
          )
      }
}

export default TodoForm;