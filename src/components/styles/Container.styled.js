import styled from 'styled-components'

export const StyledContainer = styled.div`
    position: relative;
    margin: 0;
    height: 100vh;
    width: 100vw;
    main {
        .banner {
            position: sticky;
            top: 0;
            left: 0;
            width: 100%;
            height: 20px;
    
            background: url('images/starsbg.jpg') no-repeat fixed center;
            background-size: cover;
            z-index: 1001;
    
            font-size: 10px;
            color: var(--brightBlue);
    
            padding: .25em;
            text-align: center;
    
            overflow: hidden;
            p {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 0;
                transform: translateX(0%);
                grid-gap: 1em;
                white-space: nowrap;
                animation: moveText linear 25s forwards infinite;  
                @keyframes moveText {
                    from { transform: translateX(100%); }
                    to { transform: translateX(-100%); }
                }
                span, a {
                    letter-spacing: .1em;
                }
                span.space {
                    color: var(--beige);
                }
            }
        }
    }
`
