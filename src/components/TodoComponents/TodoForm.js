import React from 'react';

class TodoForm extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
          itemText: "",
          name: "Trevor",
          town: "Alexandria"
        }; 
    
      }

      sumbitHandler = event => { 
        event.preventDefault();
        this.props.addItem(this.state.itemText);
        this.setState({ itemText: " "});
      }

      changeHandler = event => {
        this.setState({itemText: event.target.value});
      }

      render() {
        return (
          <div>
          <form onSubmit={this.sumbitHandler}>
            <input
               type="text"
               name="itemText"
               value={this.state.itemText}
               onChange={this.changeHandler}
            />
            <button type="submit">Add</button>
           </form>
            <br/>
           </div>
        );
      }

}

export default TodoForm;