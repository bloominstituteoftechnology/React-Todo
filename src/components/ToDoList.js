import React from 'react';
import ToDo from './ToDo.js';

class ToDoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todoitems: [
                {
                    id:1,
                    text:"a",
                },
                {
                    id:2,
                    text:"b",
                },
                {
                    id:3,
                    text:"c",
                }
            ],
            value: ""
        }
        
    }
    
    addToDo = (e) => {
        let items = this.state.todoitems;
        items.push({id:items.length+1, text:this.refs.newText.value}); //get input box value and assign here.
        console.log(this.refs);
        this.setState({todoitems:items});
        this.setState({value: ""});
        }
    
    render() {
        return (
            <div>
                 <input 
                    ref="newText"
                    id="input-text" 
                    type="text"
                     />
                 <button onClick={this.addToDo}>Add</button>
            
                {this.state.todoitems.map(x => {
                    return <ToDo key={x.id} item={x} />;
                })}
            </div>
        );
    }
}
export default ToDoList;