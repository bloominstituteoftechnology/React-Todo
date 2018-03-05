import React from 'react';


class FormData extends React.Component {
    constructor() {
        super();
        this.state = {
            storedList: [],
            newEntries: '',
            clicked: false
        };
    };

    handleClicker = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    handleEntry = (event) => {
        this.setState({ newEntries: event.target.value });
    }

    addEntry = (event) => {
        event.preventDefault();
       const EntryList = this.state.storedList;
       EntryList.push(this.state.newEntries);
        this.setState({
            storedList: EntryList,            
            newEntries: ''
        })
    }

    render() {
        return (
            <div>
                {this.state.storedList.map(list => <div>{list}</div>)}              
                    <form onSubmit={this.addEntry}>
                        <input type="text" 
                        onChange={this.handleEntry}
                        placeholder="Add a new entry"
                        value={this.state.newEntries}
                        />                                       
                    </form>                
            </div>            
        )
    }
}



export default FormData;