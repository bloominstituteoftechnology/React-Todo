import styled from 'styled-components';

export const Container = styled.div`
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const HeadingContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 28rem;
    background-image: url('https://cdn.pixabay.com/photo/2016/07/12/19/08/laptop-1512838_1280.png');
`

export const Heading = styled.h1`
    padding: 3%;
    color: white;
    text-shadow: -1px 1px 2px #000,
				  1px 1px 2px #000,
				  1px -1px 0 #000,
				  -1px -1px 0 #000;
    font-size: 2.5rem;
`

export const ListContainer = styled.div`
    width: 100%;
`

export const Button = styled.button`
    font-size: 20px;
    font-family: inherit;
    padding: 0.2rem;
`

export const Form = styled.form`
    width: 100%;
    padding: 0;
`

export const Input = styled.input`
    font-size: 20px;
    font-family: inherit;
    outline: none;
    margin: 5% 2% 2% 0;
    width: 60%;
    padding: 0.2rem;
`

export const TodoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20%;
    width: 100%;
`

export const Task = styled.p`
    font-size: 20px;
    padding: 0;
    margin-bottom: 2%;
    &:hover {
        cursor: pointer;
        color: #177E89;
    }
`
