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
      }

      render() {
        return (
          <form onSumbit={this.sumbitHandler}>

          </form>
        );
      }

}

export default TodoForm;