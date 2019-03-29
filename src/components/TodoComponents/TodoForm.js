import React  from "react";


 class TodoForm extends React.Component {
    state = {
      text: ""
    };
  
    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };
  
    handleSubmit = (event) => {
      event.preventDefault();
      this.props.onSubmit({
      text: this.state.text,
      complete: false
    })

    }
    //     text: this.state.text,
    //     complete: true
    //   });
    //   this.setState({
    //     text: ""
    //   });
    // };
  
    render() {
      return (

        //create Function
        <form onSubmit={this.handleSubmit}>
          <input
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="todo..."
          />
          
    
        </form>

        
      );
    }
  }


  export default TodoForm;