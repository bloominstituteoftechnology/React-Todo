import React from "react";

class SearchTodo extends  React.Component{
  render(){
    const clickSearch = () =>{
      this.props.search((this.props.value));
    }
    return(
      <div className="search-form">
      <div className="search-form-input">
        <input type="text" name="query" value={this.props.value} placeholder={"Search todo ..."} onChange={this.props.update} />
      </div>
        <div  className="search-btn"  onClick={clickSearch}><p>search</p></div>
    </div>
    );
  }  
}

export default SearchTodo;