import React from "react";

class TodoForm extends React.Component{
    constructor() {
        super();
        this.state = {
          inputValue: "",
        };
      }

    onChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addChange(this.state.inputValue);
    
        this.setState({
          inputValue: "",
        });
      };

    render() {

        return ( 
            <div>
               <form>
                   <input onChange={this.onChange} type="text" name="task" value={this.state.inputValue}/>
               </form>
               <button> Add </button>
            </div>
        )
    }
}

export default TodoForm;