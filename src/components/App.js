import React, { Component } from 'react';
import ReactDom from 'react-dom';


class App extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = { 
            items: [],
            newItem: ''
        };
    }

    handleClick(i) {
        const store = this.state.items;
        console.log(store);
        store[i].completed = !store[i].completed;
        this.setState({
            items:store
        })
        localStorage.setItem('items', JSON.stringify(this.state.items));
    }

    handleDelete(i) {
        const store = this.state.items;
        store.splice(i,1);
        this.setState({
            items:store
        })
        localStorage.setItem('items', JSON.stringify(this.state.items));
    }

    addNewItem (event) {
        event.preventDefault();
        const toDo = this.state.items;
        this.state.newItem ? toDo.push({name: this.state.newItem, completed: false}) : toDo.push({name: 'blank',completed: false});
        this.setState({
            items: toDo,
            newItem: ''
        });
        localStorage.setItem('items', JSON.stringify(this.state.items))
    };

    handleChange (event) {
        this.setState({
            newItem: event.target.value
        });
    };

    componentWillMount() {
        const stored = localStorage.getItem('items');
        this.setState( {
            items: JSON.parse(stored)
        });
    }
    render() {
        return (
            <div>
                <h3>my to-do list</h3>
                <h5>click on an item to mark completed</h5>
                <table>
                    <tr><th><li>complete?</li></th><th>delete?</th></tr>
                    {this.state.items.map((item, i) => <tr><td key={i} >{item.completed ? <li><form>
                    <div type="button" onClick={() => (this.handleClick(i).bind(this))}>
                    <s>{item.name}</s>
                  </div>
                    </form></li> : <div><form>
                    <div type="button" onClick={() => (this.handleClick(i).bind(this))}>
                    {item.name}
                  </div>
                    </form></div>}
                    </td><td class="button"><form>
                    <button type="button" onClick={() => (this.handleDelete(i).bind(this))}>
                    delete!
                  </button>
                    </form></td>
                    </tr>)}
                </table>
                <form onSubmit={this.addNewItem} >  <input type="text" onChange = {this.handleChange} placeholder="new to do.." value={this.state.newItem}/> 
                <input type="submit" value="list it!"/></form>
                <h2>Add a to do list item above!</h2>
            </div>
        );
    }
};
export default App;