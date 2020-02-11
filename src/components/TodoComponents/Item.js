import React, { Component } from 'react';


class Item extends Component {
    constructor(){
        super();
    }



    render(){
        return(
            <div
            style={{height: "50px", border: "1px solid red"}}
                onClick={ () => this.props.toggleTodo(this.props.item.id) }>
                {/* {console.log('item component',this.props.item.id)} */}

                <p>{this.props.item.task}</p>
            </div>
        )
    }
}

export default Item;