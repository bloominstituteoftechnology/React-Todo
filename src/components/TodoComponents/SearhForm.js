import React, { useState , useEffect} from "react";
import styled from 'styled-components'

const Button = styled.button`
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid balck;
  border-radius: 3px;
`;
const Input = styled.input.attrs(props => ({
  type: "search",
  size: props.size || "0.4em",
}))`
  color: black;
  font-size: 1em;
  border: 2px solid black;
  border-radius: 3px;
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

export default function SearchForm(props) {
  

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(props.tasks);

  useEffect(() => {}, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    props.SearchArray(searchTerm);
  };

  return (
    <section className="search-form">
      <form onSubmit={handleSubmit} >
        <label htmlFor="name">Search:</label>
        <Input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          onChange={handleChange}
          value={searchTerm}
        />
        <Button type="sumbit">Submit</Button>
      </form>
      <div>
          {searchResults.map(item => {
              console.log("Search item after map", item )
            return <div key ={item.id}> {props.item}</div>
          })} 
     </div>
    </section>
  );
}
