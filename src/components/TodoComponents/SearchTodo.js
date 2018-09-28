import React from "react";

class SearchTodo extends  React.Component{
  render(){
    console.log(this.props.value)
    const clickSearch = () =>{
      this.props.search(this.props.value);
    }
    return(
      <div className="search-form">
      <div className="search-form-input">
        <input type="text" name="query"  placeholder={"Search todo ..."} onChange={this.props.update} />
      </div>
        <div  className =" search-btn" value={this.props.value} onClick={clickSearch}><p>search</p></div>
    </div>
    );
  }  
}

export default SearchTodo;