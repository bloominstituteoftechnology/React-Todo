import React from 'react'


class TodoForm extends React.Component {

    constructor() {

        super()
        this.state = {
            item1: ""

        }
    }

     // Class methods to update state
  addItem = (e, item) => {
    e.preventDefault();

    const newItem = {
      name: item,
      id: Date.now(),
      purchased: false
    };

    this.setState({
      todoItems: [...this.state.todoItems, newItem]
    });
  };

  // this is a method of App
  toggleItem = itemId => {
    console.log(itemId);

    this.setState({
      todoItems: this.state.todoItems.map(item => {
        console.log(item);
        if (itemId === item.id) {
          return {
            ...item,
            purchased: !item.purchased
          };
        }

        return item;
      })
    });
  };

  clearPurchased = e => {
    e.preventDefault();
    console.log(this.state.todoItems);
    this.setState({
      // returns the items that haven't been purchased and purges
      // the ones that have been purchased
      todoItems: this.state.todoItems.filter(item => item.purchased === false)
    });
    console.log(this.state.todoItems);
  };


    render(props) {

       
        return (

            <div className="form">

                <h2>Welcome to my Todo App!</h2>
                <form onSubmit={this.submitItem}>
                    <input type="text" placeholder="Add new task here" name="item" onChange={this.handleChanges}></input>
                    <button>Add Todo</button>
                    <button>Clear completed</button>
                </form>

            </div>
        )


    }



}



export default TodoForm




