import React from 'react';

const SearchButtons = (props) => <div className="search-buttons">
                                    <div className="button search-button" onClick={props.searchHandler}>Search</div>
                                    <div className="button search-button" onClick={props.showAll}>All</div>
                                </div>
export default SearchButtons;