import React from "react"

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state={
            data
        }
    }

    handleChanges = e => {
        e.preventDefault()
        this.setState({
            data: e.target.data
        })
    }

    render() {
    
    return (
      <form>
        <input type="text" name="item" />
        <button>Add</button>
      </form>
    );
  }
} 