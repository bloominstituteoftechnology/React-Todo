// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from './Todo';
import ToDoForm from './TodoForm';

class ToDoList extends React.Component {
    constructor(){
        super();

        this.state = {
            itemsToDo: [  {
                task: 'Organize Garage',
                id: 1528817077286,
                completed: false
              },
              {
                task: 'Bake Cookies',
                id: 1528817084358,
                completed: false
              }],
            
            nextId: 152881708435
        };

    };

    // deleteItem(itemId){
    //     const deleteIndex = this.state.itemsToDo.findIndex(item => Number(item.id) === Number(itemId));
    //     this.setState({itemsToDo: this.state.itemsToDo.filter((item, index) => index !== deleteIndex)});
    // };

    markComplete = (itemId) => {
        const selectedItem = this.state.itemsToDo.find(item => Number(item.id) === Number(itemId));
        selectedItem.completed = true;

        const updatedItems = this.state.itemsToDo.map(item => item.id === selectedItem.id ? selectedItem : item);

        this.setState({
            itemsToDo: updatedItems,
            nextId: this.state.nextId
        });
    };

    addItem = task => {
        this.setState({
            itemsToDo: [...this.state.itemsToDo, {
                task,
                id: this.state.nextId,
                completed: false
            }],
            nextId: this.state.nextId + 1
        });
    }

    deleteCompleted = () => this.setState({
        itemsToDo: this.state.itemsToDo.filter(item => !item.completed),
        nextId: this.state.nextId,
    })

    render(){
        return (
            <>
            {this.state.itemsToDo && this.state.itemsToDo.map(item => <ToDo key={item.id} item={item} markComplete={this.markComplete}/>)}
            <ToDoForm addItem={this.addItem} />
            <button onClick={() => this.deleteCompleted()}>Delete Completed</button>
            </>
        )
    }
}

export default ToDoList;