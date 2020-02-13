import React from 'react';

class ClearForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          itemText: "",
          name: "Trevor",
          town: "Alexandria"
        }
    }

    // if nothing is being performed by the super, or constructor you don't need to declare them
    
    render() {
        return (
        //    <button className="clear-button"
        //    onClick={e => this.props.clearCompleted}>Clear Form</button>
        <div>
            {console.log(this.props)}
        </div>
        );
    }
}

export default ClearForm;