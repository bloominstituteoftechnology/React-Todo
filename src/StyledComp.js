import styled from 'styled-components'

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1000px;
    width: 100%;
    border: solid lightgrey 1px;
    box-shadow: 0 1px 1px grey;
    padding: 10px;
`

export const StyledList = styled.div`
    text-align: center;
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FormButtonContainer = styled.div`
    margin: 5px;
    
    button {
        margin: 5px;
    }
`