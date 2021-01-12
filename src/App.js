import React from 'react';
import TodoList from './components/TodoList'

class App extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            items:[],
            currentItem:{
                text: '',
                key: '',
                completed: false
            }
        }
        this.handleInput = this.handleInput.bind(this)
        // this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this)
    }
    handleInput(e){
        console.log(e.target.value)
        this.setState({
            currentItem:{
                text: e.target.value,
                key: Date.now()
            }
        })
    }
    addItem = (e) => {
        e.preventDefault();
        const newItem = this.state.currentItem
        console.log(newItem)
        if(newItem.text!=="") {
            const newItems=[...this.state.items, newItem];
            this.setState({
                items:newItems,
                currentItem:{
                    text: '',
                    key:''
                   
                }
            })
        }
    }
    deleteItem(key) {
        const filteredItems = this.state.items.filter(item => 
            item.key!==key);
            this.setState({
                items:filteredItems
            })
    }
    toggleCompleted = (e) => {
        const currentCompleted = this.state.currentItem.completed
       
        this.setState({
            currentItem:{
                completed: !currentCompleted
            }
        })
       
    }
    render() {
        return(
            <>
           <h1>Todo App</h1>
           <form id="to-do-form" onSubmit={this.addItem}>
           <input type="text" placeholder="Enter Text" onChange={this.handleInput}/>
           <button type="submit">Add</button>
           <TodoList items={this.state.items}
           deleteItem={this.deleteItem} 
           toggleComplete={this.toggleCompleted}
           />
           </form>
           </>
        )
    }
}

export default App