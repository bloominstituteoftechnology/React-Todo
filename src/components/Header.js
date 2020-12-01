import React from 'react';
import styled from 'styled-components';

class Header extends React.Component {
    constructor(){
        super();
            this.state={
                greeting: 'To-Do, or Not To-Do'
            }
    }

    render(){
        return(
            <div>
                <MainHeader>
                    {this.state.greeting}
                </MainHeader>
            </div>
        )
    }
}

export default Header;

const MainHeader = styled.div`
font-size: 2.8rem;
font-family: Verdana, Geneva, Tahoma, sans-serif;
margin: 45px 0;
`