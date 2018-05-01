// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import List from './List'

class TodoList extends React.Component {
        constructor() {
            super();
            this.state = {
                char: "",
                item: [],
            };
            this.toggleFlag = this.toggleFlag.bind(this);
        }

        updateChar = event => {
            this.setState({
                [event.target.name]: event.target.value
            });
        }

        handleSubmitTodo = () => {
            const list = this.state.item;
            list.push(this.state.char);
            this.setState({
                list: list,
                char: ""
            })
        }

        enterKeyPress = event => { 
            if (event.key === "Enter") {
                this.handleSubmitTodo();
            }
        }

        toggleFlag = () => {
            this.setState({
                condition: !this.state.condition
            })
        }

        render() {
            return (
              <div>
                <h3>Something need doing?</h3>
                <input type="text" 
                  name="char" 
                  onKeyPress={this.enterKeyPress} 
                  onChange={this.updateChar} 
                  value={this.state.char} 
                  placeholder="Add things to Me!!!" 
                />
                <button onClick={this.handleSubmitTodo}>Update To-Do List</button>
                <List className={this.state.condition ? "complete" : "pending"} toggleClassName={this.toggleFlag} list={this.state.item} />
              </div>
            );
          }
        }

        export default TodoList;