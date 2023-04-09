import styled from 'styled-components'

export const StyledHeader = styled.header`
    .header-cont {
        display: flex;
        justify-content: space-between;
        align-items: center;
        heigth: 20vh;
        width: 100%;

        padding: .85em;
        box-sizing: border-box;
        z-index: 900;
        span.color {
            color: var(--brightBlue);
        }
        .header-logo {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;

            width: 50%;
            font-size: .85rem;
            color: var(--beige);
            z-index: 900;
            img {
                width: 30px;
                height: auto;
                object-fit: cover;
                margin-right: .4em;
            }
        }

        .header-settings {
            display: flex;
            justify-content: flex-end;
            font-size: .75rem;
            color: var(--beige);
            width: 200px;
            z-index: 900;
            span {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 30px;
                height: 30px;
                font-size: .8rem;
                &:hover {
                    cursor: pointer;
                }
            }
        }
        svg {
            color: var(--brightBlue);
            width: 15px;
            height: 15px;
        }
    }
`