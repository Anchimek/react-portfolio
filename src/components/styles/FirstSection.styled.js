import styled from 'styled-components'

export const StyledFirstSection = styled.section`
    position: relative;
    margin: 0;
    width: 100%;
    height: 100vh;
    margin-top: -4em;
    video {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        object-fit: cover;
    }
    .first-section--content {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        img {
            height: 50vh;
            width: auto;
        }
        .flicker {
            animation: flicker 3s linear infinite;
            @keyframes flicker {
                0%, 60%, 62.999%, 64%, 64.999%, 70% {
                    opacity: .99;
                }
                63%, 63.999%, 65%, 69.999% {
                    opacity: 0.2;
                }
            }
        }
    }
    
`
