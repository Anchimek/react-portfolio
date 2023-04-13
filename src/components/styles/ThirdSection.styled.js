import styled from 'styled-components'

export const StyledThirdSection = styled.section`
    .third-section--content {
        position: relative;
        padding: 2em 0;
        #tsparticles {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .third-section--heading {
            margin: 0;
            padding: 0;
            text-align: center;
        }
        .third-section--logos {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 2em;

            height: 100%;
            width: 100%;
            padding: 2em;


            background: transparent;
            box-shadow: none;
            img {
                width: 50px;
                height: auto;
                object-fit: cover;
            }
        }
    }
`
