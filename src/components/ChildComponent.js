import React, { COmponent } from 'react';

class ChildComponent extends Component {
    constructor() {
        super(); 
        this.state = {
            clicked: false
        };
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        const styles = this.state.clicked ? {text.Decoration: }
        return (
            <div style={styles} onClick={this.handleClick}>
            {this.props.thing}
            </div>
    };
        )
    }

    export default ChildComponent; 