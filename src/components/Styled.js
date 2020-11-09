import styled from "styled-components"



export const Container = styled.div `

margin: 0 auto;
margin-top: 50px;
text-align: center;     
display: flex;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;
font-size: 1em;
padding: 20px;
max-width: 400px;
border: 1px solid black;
h1 {
    color: green;
}
form {
 
    label {
        display: flex;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 10px;
        input {
            margin: 10px; 
        }
    }
}
p {
    color: green;
}
button {
    width: 50px;
     align-self: center;
}
`