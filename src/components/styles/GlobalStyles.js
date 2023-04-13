import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
        * {
            box-sizing: border-box;
            font-family: 'Anton', sans-serif;
            letter-spacing: .05em;
            text-shadow: 0px 0px 7px rgba(0, 0, 0, 1);
            
            --brightBlue: #00C6B1;
            --beige: #FFECCC;

        }
        body {
            font-size: 1.15em;            
            margin: 0;
            color: var(--beige);

            background: url('images/starsbg.jpg') no-repeat fixed center;
            background-size: cover;
        }
        div {
            -webkit-box-shadow: 0px 6px 72px -32px rgba(255,236,204,0.44);
            -moz-box-shadow: 0px 6px 72px -32px rgba(255,236,204,0.44);
            box-shadow: 0px 6px 72px -32px rgba(255,236,204,0.44);
        }

        h1, h2, h3, h4 {
            margin: 0;
            padding: 0;
        }
        
        h1 {
            margin: 2.75em 0 0 0;
            color: var(--beige);
            font-size: 2.25rem;
            text-align: center;
            span {
                background: linear-gradient(180deg, #00C6B1, #1BA697, #EEDEC4, #FFECCC);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
                text-shadow: none;
            }
        }
        h2 {
            color: var(--beige);
            text-transform: uppercase;

            font-size: 2.25rem;
            padding-top: 1em;
        }
        h3 {
            text-transform: uppercase;
            font-size: 2rem;
            font-family: 'Stick No Bills', sans-serif;
            font-weight: 200;
            margin: 0 0;
        }
        h4 {
            font-size: .8rem;
            font-family: 'Stick No Bills', sans-serif;
            font-weight: 200;
            margin-bottom: .5rem;  
        }
        a,
        a:visited,
        a:link,
        a:hover,
        a:focus,
        a:active {
            color: var(--brightBlue);
            text-decoration: none;
        }
`
export { GlobalStyles }