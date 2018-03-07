import React, { Component } from 'react'; 

class ToDoList extends Component {
    constructor() {
        super();

        this.state = {
            toDoItems: ['A', 'B', 'C'],
            newToDo: '',
            clicked: false,
        };  
    };
    //there was an event passed below
    addToDo = (event) => {
        event.preventDefault();
        let toDoItemsList = this.state.toDoItems;
        toDoItemsList.push(this.state.newToDo);
 
        this.setState ({
            
            toDoItems: toDoItemsList,
            newToDo: '',
        });
    };

    handleInput = (event) => {
        console.log(`This is the onChange symbols: `, event.target.value);
        //this.newToDo = event.target.value;
        this.setState ({ newToDo: event.target.value});
    };
    
    // handleClick = () => {
    //     this.setState({ clicked: !this.state.clicked})
    // }

    render() {
        // const styles = this.state.clicked ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
        // return (
        //     <div id="two" style={styles} onClick={this.handleClick}>
        //         {this.props.thing}
        //     </div>
        // )
        return (
            <div>
                {this.state.toDoItems.map((toDoItem, i) => <div key={i}>{toDoItem} </div>)}
                <br/><form onSubmit={this.addToDo}>
                <input type='text' placeholder='Please enter some text' onChange={this.handleInput} value={this.state.newToDo}/>
                </form>
                
            </div>
        );
    };
};

export default ToDoList;
