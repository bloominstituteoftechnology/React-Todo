import React from 'react';
import './Header.css';

const Header = props =>{
    return(
        <div>
            <p className='header-text'>{props.headerText}</p>
        </div>
    )
}
export default Header;