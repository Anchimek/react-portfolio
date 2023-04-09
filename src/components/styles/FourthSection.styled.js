import styled from 'styled-components'

export const StyledFourthSection = styled.section`
    .fourth-section--content {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        background: url('images/starsbg.jpg') no-repeat fixed center;
        background-size: cover;

        padding: 2em 0;

        .fourth-section--media {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 100%;
            box-shadow: none;
            padding-top: 1em;
            img {
                width: 50px;
                height: auto;
                object-fit: cover;
            }
        }
        .fourth-section--infos {
            width: 100%;
            padding: 0 1.5em;
            box-shadow: none;
            margin-top: 2em;

           p {
            font-family: 'Stick No Bills', sans-serif;
            font-style: normal;
            font-size: .7rem;
            line-height: 1.75em;

            text-align: center;
            span {
                color: var(--brightBlue);
                font-size: .8rem;
                font-family: 'Stick No Bills', sans-serif;
                font-weight: 800;
            }
           }
        }
    }
`
