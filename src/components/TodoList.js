import React, { Component } from 'react'; 

class ToDoList extends Component {
    constructor() {

        super();

        this.state = {
        toDoItems: ['A', 'B', 'C'],
        newToDo: '',


        };    
    };

    addToDo = (event) => {
        //event.preventDefault();
        console.log('This is the newToDo: ', this.state.newToDo);
        const toDoItemsList = this.state.toDoItems;
        toDoItemsList.push(this.state.newToDo);
        
        this.setState ({
            newToDo: '',
            toDoItems: toDoItemsList,
        });
    };
    
    render() {
        return (
            <div>
                {this.state.toDoItems.map((toDoItem) => <div>{toDoItem}</div>)}
            
                <p/>
                <form onSubmit={this.addToDo()}>
                    <input type='text' placeholder='Please enter some text' value={this.state.newToDo} />
                </form>
                
            </div>
        );

    };
        

    };

    export default ToDoList;