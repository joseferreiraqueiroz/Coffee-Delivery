import { createGlobalStyle } from "styled-components";
import { mixins } from "./fonts/mixins";

export const GlobalStyle = createGlobalStyle`
 *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
 input:focus{
    outline: 2px solid ${props => props.theme.colors["brand-purple"]};
 }
 
    body{
        font-family: 'Baloo 2', sans-serif;
        -webkit-font-smoothing: antialiased;
        background-color: ${props => props.theme.colors["base-background"]};
    }
    input, textarea, button{
        font-size: 1rem;
        font-weight: 400;
        ${mixins.fonts.textM}
    }

`
