import styled from 'styled-components';

const Input = styled.input.attrs({
    width: props => props.fullWidth ? "100%" : "auto"
})`
    border-radius: 5px;
    border: thin solid lightgray;
    height: 20px;
    padding: 10px;
    margin-right: 10px;
    width: ${props => props.width}
`;

export default Input;