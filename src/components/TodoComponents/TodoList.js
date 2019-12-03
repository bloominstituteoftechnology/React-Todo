// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";



class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
          itemName: ""
        };
      }
    
      handleChanges = e => {
        this.setState({
            itemName: e.target.value
          });
        };
      
        handleSubmit = e => {
            e.preventDefault();
            if (this.state.itemName !== "") {
              this.props.addItem(this.state.itemName);
              this.setState({
                itemName: ""
              });
            }
          };
        
          render() {
            console.log("rendering form");
            return (
              <form onSubmit={this.handleSubmit}>
                <input
                  onChange={this.handleChanges}
                  type="text"
                  name="item"
                  value={this.state.itemName}
                />
                <button>Add</button>
              </form>
            );
          }
        }
        
        export default TodoList;