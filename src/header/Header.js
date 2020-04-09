import React from "react";
import styled from "styled-components";

const NavBar = styled.div`
  height: 50px;
  background-color: transparent;
  background: transparent;
  border-bottom: 1px solid rgb(7, 55, 74);
  list-style-type: none;
`;

function Header() {
  return (
    <>
      <NavBar>
        <ul>
          <li>Keep</li>
        </ul>
      </NavBar>
    </>
  );
}

export default Header;
