import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
        * {
            box-sizing: border-box;
            font-family: 'Syne Mono', monospace;
        }
        body {
            background-color: #111;
            color: #302D29;
            font-size: 1.15em;            
            margin: 0;
        }
`
export { GlobalStyles }