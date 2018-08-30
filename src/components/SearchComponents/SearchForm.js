import React from 'react';

function SearchForm(props) {
   return (
       <form>
           <input
            value={props.inputSearch}
            onChange={props.handleChange}
            placeholder='search'
            name='searchText'/>
           <button onClick={props.search}>Search</button>
           <button onClick={props.clear}>Clear</button>
       </form>
   );
}


export default SearchForm
