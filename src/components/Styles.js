import styled from 'styled-components';

export const Container = styled.div`
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Img = styled.img`
    width: 8rem;
`

export const HeadingContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`

export const Heading = styled.h1`
    padding: 2%;
    align-self: center;
    font-size: 2.5rem;
`

export const ListContainer = styled.div`

`

export const Button = styled.button`
    font-size: 16px;
    font-family: inherit;
    margin-top: 10%;
    padding: 0.2rem;
`

export const FormContentContainer = styled.div`

`

export const Form = styled.form`
    
`

export const Input = styled.input`
    font-size: 20px;
    font-family: inherit;
    outline: none;
    margin: 0 5% 5% 0;
    padding: 0.2rem;
`

export const TodoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 40%;
`

export const Task = styled.p`
    font-size: 20px;
    padding: 2%;
    &:hover {
        cursor: pointer;
        color: #177E89;
    }
`
