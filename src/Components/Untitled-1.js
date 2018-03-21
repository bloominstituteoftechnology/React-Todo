import {react} from 'react';
 
export class Todo extends React.Component {
     
    constructor(){
        super(...arguments);
        this.state = {
            title: this.props.title,
            summary: this.props.summary,
            completed: this.props.completed,
        }
    } 
    toggleCompleted(){
        this.setState({completed: !this.state.completed})
    }
    editTodo(key, event) {
         
        var change = {
            title: this.state.title,
            summary: this.state.summary
        };
        change[key] = event.target.value;
        this.setState(change);       
    }       
    render() {
         
        return(
            <li>
                <h2>{this.state.title}</h2>
                <p>{this.state.summary}</p> 
                <input type="checkbox" checked={this.state.completed} onChange={() => this.toggleCompleted()} />
                 
                <input type="text" value={this.state.title} onChange={(e) => this.editTodo('title', e)} /> <textarea value={this.state.summary} onChange={(e) => this.editTodo('summary', e)}></textarea>                 
                 
                <button onClick={this.props.remove}>Remove</button>
            </li>
        )  
    }
};
