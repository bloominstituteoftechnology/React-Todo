import React from 'react';


const Header = props =>{
    return(
        <div>
            <p className='header-text'>{props.headerText}</p>
        </div>
    )
}
export default Header;