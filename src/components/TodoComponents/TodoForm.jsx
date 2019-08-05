import React, {Component} from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            item:"",
         }
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        let item = {...this.state};
        item = e.target.value;
        this.setState({item});
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.addItem(this.state.item);
    }

    render() { 

        return ( 
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    
                    <input name="item" placeholder="Add Todo" onChange={this.handleChange}/>
                    <button className="btn-search btn btn-primary" type="submit">Add</button>
                </form>
            </React.Fragment>
         );
    }
}
 
export default TodoForm;