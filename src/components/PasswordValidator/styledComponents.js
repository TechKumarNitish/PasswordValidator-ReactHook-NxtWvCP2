// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #24263c;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Card = styled.div`
    background-color: #383a4e;
    width: content-width;
    padding: 5px;
    border-radius: 10px;
    padding:40px 35px;
    text-align: center;
`

export const Input = styled.input`
    back-ground-color: #edeeff;
    padding: 10px 10px;
    width: 300px;
    margin-top: 30px;
`

export const Heading = styled.h1`
    color:  #edeeff;
    font-weight: 600;
    font-family: Roboto;
`
export const ErrorMessage = styled.p`
    color: #ef4444;
    font-size: 12px;
    margin-top: 5px;
    font-family: Roboto;
`
export const Paragraph = styled.p`
    color: white;
    font-size: 12px;
`
