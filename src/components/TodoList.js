import React, { Component } from 'react'; 

class ToDoList extends Component {
    constructor() {
        super();

        this.state = {
            toDoItems: ['A', 'B', 'C'],
            newToDo: '',
        };  
    };
    //there was an event passed below
    addToDo = (event) => {
        event.preventDefault();
        //console.log('This is the newToDo: ', this.state.newToDo);
        //const value = document.querySelector('input').value;
        let toDoItemsList = this.state.toDoItems;
        toDoItemsList.push(this.state.newToDo);
        
        
        this.setState ({
            
            toDoItems: toDoItemsList,
            newToDo: 'Some random bullshit',
        });
        
    };

    handleInput = (event) => {
        console.log(`This is the onChange symbols: `, event.target.value);
        //this.newToDo = event.target.value;
        this.setState ({ newToDo: event.target.value});
    };
    
    render() {
        return (
            <div>
                {this.state.toDoItems.map((toDoItem, i) => <div key={i}>{toDoItem} </div>)}
                <br/><form onSubmit={this.addToDo}>
                <input type='text' placeholder='Please enter some text' onChange={this.handleInput} value={this.state.newToDo}/>
                </form>
                {/* {<div>{this.state.newToDo}</div>} */}
                
            </div>
        );

    };
        

};

export default ToDoList;