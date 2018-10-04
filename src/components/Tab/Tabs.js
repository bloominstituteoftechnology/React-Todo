import React from 'react';
import './Tabs.css';


//== Tabs Component ============================================================

const Tab = props => (
    <div className="tab">{props.children}</div>
);


//== Tabs Component ============================================================

class Tabs extends React.Component {

    //-- Basic Setup ---------------------------------
    constructor(props) {
        super(...arguments);
        const titles = props.children.map(tab => tab.props.title);
        this.state = {
            tabs: titles,
            currentTabTitle: titles[0]
        }
    }

    //-- Rendering - only render current tab ---------
    render = () => {
        // Determine Current Tab
        const currentTab = this.props.children.find(tab => (
            tab.props.title === this.state.currentTabTitle
        ));
        // Display
        return (
            <div className="tabs">
                <div className="tabs-selector">
                    {this.state.tabs.map(tab => {
                        let classText = "tabs-title";
                        if(tab === this.state.currentTabTitle){
                            classText += " tabs-title--selected";
                        }
                        return (
                            <a className={classText}
                                key={tab}
                                onClick={this.select}
                                data-tab={tab}
                            >{tab}</a>
                        )
                    })}
                </div>
                <div className="tabs-display">
                    {currentTab}
                </div>
            </div>
        )
    }

    //-- Switch Current Tab --------------------------
    select = eventClick => {
        const tabTitle = eventClick.target.dataset.tab;
        this.setState({
            currentTabTitle: tabTitle
        });
    }
}

export {Tab, Tabs};