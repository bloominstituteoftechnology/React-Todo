import React from "react";
import "../styles.css";


class TodoForm extends React.Component {
    constructor() {
        super();

        this.state = {
            item: ""
        };
    }

    handleChanges = e => {
        this.setState({
            item: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.item);
        this.setState({
            item: ""
        })
    }

    render() {
        return (

              <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    name="item"
                    onChange={this.handleChanges}
                  />
                  <button>Add</button>
              </form>
         
        )
    }
}

export default TodoForm;