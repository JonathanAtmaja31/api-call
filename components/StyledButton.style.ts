import styled, {css} from 'styled-components'

export const Button = styled.button`
background: ${(props:any) => props.primary ? "red" : "white"};
color: ${(props:any) => props.primary ? "white" : "blue"};

font-size: em;
margin: 0.5em;
padding: 0.25em 1em;
border: 2px solid black;
border-radius: 3px;
font-family: "Times New Roman", Times, serif; 
`