import { createGlobalStyle } from "styled-components";
export const darkTheme = {
    bodyBg: "black",
    bodyText: "white"
}
export const lightTheme = {
    bodyBg: "white",
    bodyText: "black"
}
export const GlobalStyles = createGlobalStyle `
    body{
        background: ${props => props.theme.bodyBg};
        color: ${props => props.theme.bodyText};
    }
    .link-style{
        text-decoration: none;
        margin: 5px;
        font-weight: 800;
        color: ${props => props.theme.bodyText};
    }
    .link-style:hover{
        color: ${props => props.theme.bodyText};
        border-bottom: 4px solid ${props => props.theme.bodyText}
    }
    .active-link-style{
        border-bottom: 4px solid ${props => props.theme.bodyText}
    }
`