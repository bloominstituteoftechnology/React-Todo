import React from 'react';
import './Tabs.css';
//import Tab from './Tab.js';

class Tabs extends React.Component {
    constructor(props) {
        super(...arguments);
        const titles = props.children.map(tab => tab.props.title);
        console.log(titles)
        this.state = {
            tabs: titles,
            currentTabTitle: titles[0]
        }
    }
    render = () => {
        const currentTab = this.props.children.find(tab => (
            tab.props.title === this.state.currentTabTitle
        ));
        return (
            <div className="tabs">
                <div className="tabs-selector">
                    {this.state.tabs.map(tab => (
                        <a className="tabs-title"
                            key={tab}
                            onClick={this.select}
                            data-tab={tab}
                        >{tab}</a>
                    ))}
                </div>
                <div className="tabs-display">
                    {currentTab}
                </div>
            </div>
        )
    }
    select = eventClick => {
        const tabTitle = eventClick.target.dataset.tab;
        console.log(tabTitle)
        this.setState({
            currentTabTitle: tabTitle
        });
    }
}

export default Tabs;
