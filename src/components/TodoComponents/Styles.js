import styled from "styled-components";

export const Form = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3%;
`;

export const Form1 = styled.form`
  display: flex;
  justify-content: center;
  padding: 4%;
  flex-wrap: wrap;
`;

export const Body = styled.div`
  background: rgb(183, 222, 142);
  background: linear-gradient(
    180deg,
    rgba(183, 222, 142, 1) 0%,
    rgba(37, 63, 168, 1) 95%
  );
  border-radius: 7px;
  height: 24rem;
  width: 100%;
  font-family: "Permanent Marker", cursive;
`;

export const Button = styled.button`
    
    display: flex;
    justify-content: space-evenly;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    background: #0069ed;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, 
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 3px;
    
}

button&:hover,
button&:focus {
    background: rgb(63,94,251);
    background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
}

button&:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
}

button&:active {
    transform: scale(0.99);
}
`

export const Input = styled.input`
font-size: 3rem
border-radius: 14px;
`


