// eslint-disable-next=line
import React, { Component } from "react"

class ToDoList extends Component {
constructor(props) {
    super(props);
    this.state= {
        list:[],
        userInput:''
    };
}
    handleUserInput = (event) => {
        this.setState({ userInput:event.target.value})
    }
    addToItem = (event)=> {
        event.preventDefault();
        const ToDos =this.state.list;
        ToDos.push(this.state.userInput);
        this.setState({
            userInput:'',
            list:ToDos
        });
    }

render() {
    return (
    <div>
     {this.state.list.map(Todo=> <ChildComponent thing>={ToDo} />)
            < form onSubmit= {this.addToItem}>
            <input onChange={this.handleUserInput}
            placeholder=" Add New To Do" value ={this.state.userInput}/>
   </form>
        </div>
          );

        }
    }

export default ToDoList