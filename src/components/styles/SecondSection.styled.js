import styled from 'styled-components'

export const StyledSecondSection = styled.section`
    .second-section--content {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        background: url('images/starsbg.jpg') no-repeat fixed center;
        background-size: cover;
        padding-top: 1em;
        .second-section--project {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-top: 2em;

            box-shadow: none;
            h3 {
                span {
                    color: var(--brightBlue);
                    font-family: 'Stick No Bills', sans-serif;
                    font-weight: 200;
                }
            }
            img {
               width: 230px;
               heigth: auto;
               object-fit: cover;
               
               border-radius: .5em;
               box-shadow: 0px 1px 36px -14px rgba(255,236,204,0.9);
               -webkit-box-shadow: 0px 1px 36px -14px rgba(255,236,204,0.9);
               -moz-box-shadow: 0px 1px 36px -14px rgba(255,236,204,0.9);
            }
            p {
                font-family: 'Stick No Bills', sans-serif;
                font-style: normal;
                font-size: .75rem;
                line-height: 1.75em;
    
                padding: 1em 4em;
                text-align: justify;
                span {
                    font-family: 'Stick No Bills', sans-serif;
                    font-size: .75rem;
                    font-weight: 400;
    
                    color: var(--brightBlue);
                }
            }
        }
    }
`
