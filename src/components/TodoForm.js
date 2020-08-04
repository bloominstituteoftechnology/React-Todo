import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          itemText: "",
          statePropThatReliesOnProps: props.something
        };
      }

      handleChanges = e => {
          this.setState({
              itemText: e.target.value
          });
      };

      handleSubmit = e => {
          e.preventDefault();
          this.props.addItem(this.state.itemText);
          this.setState({
              itemText: ''
          });
      };

      render() {
        return (
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="itemText"
                value={this.state.itemText}
                onChange={this.handleChanges}
              />
              <button>Add</button>
            </form>
          );
        }
      }
      
      export default TodoForm;