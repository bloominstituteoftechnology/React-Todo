import styled from 'styled-components';

const Button = styled.button.attrs({
    background: props => props.primary ? 'mediumseagreen' : 'indianred'
})`
    cursor: pointer;
    background: ${props => props.background};
    border: none;
    border-radius: 5px;
    color: white;
    height: 40px;
    min-width: 100px;
    padding: 10px;
    margin: 0 5px;
    
    &:hover {
      opacity: .75  
    }
`;

export default Button;