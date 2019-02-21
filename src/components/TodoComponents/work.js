const GroceryList = props => {
    const sortedList = props.groceris.sort((a, b) => a.purchased - b.purchased);
    return (
        <div className='shopping-list'>
        {sortedList.map(item => (
            <item key={item.id} item={item} toggleItem={props.toggleItem} />
        ))}
        </div>
    )
}

const Item = props => {
    return (
        <div className={`items${props.item.purchased ? 'purchased' : ''}`}
        onClick={() => props.toggleItem(props.item.id)}
        >
        <p>{props.items.name}</p>
        </div>
    )
}

toggleItem = itemId => {
    this.setState ({
        groceries: this.state.groceries.map(item =>{
            if (itemId === item.id) {
                return {
                    ...item, 
                    purchased: !item.purchased
                };
            }
            return item;
        })
    })
}


class ListForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: ''
        };
}

handleChanges = e => {
    this.setState({[e.tarrget.name]: e.target.value });
}
    
submitItem = e => {
        this.setState({
            item: ''
        });
};

render() {
        return (
            <form onSubmit={this.submitItem}>
            <input type='text' 
            value={this.state.item} 
            name='item'
            onChange={this.handleChanges}/>
            <button>Add</button>
            </form>
        );
    }
}
/* addItem */
addItem = (e, item) => {
    e.preventdefault();
    const nweItem = {
        name: item,
        id: Date.now(),
        purchased: false
    };
    this.setState({
        groceris: [...this.state.groceris, newItem]
    });
}


claerPurchased = e => {
    e.preventdefault();
    console.log('running!');
    this.setState({
        groceries: this.state.groceries.filter(item => !item.purchased)
    });
};

// render() {
//     console.log('rednering...');
//     return (
//         <div className='App'>
//         <div className='header'>
//         <h1>Shopping List</h1>
//         <listForm addItem={this.addItem} />
//         </div>
//         <GroceryList
//         groceries={this.state.groceries}
//         toggleItem={this.toggleItem}
//         />
//         <button className='clear-btn' onClick={this.purchased}>
//         Clear purchased
//        </button>
//         </div>
//     )
// }