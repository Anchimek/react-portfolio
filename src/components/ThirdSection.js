import React from 'react'
import { StyledThirdSection } from './styles/ThirdSection.styled'
import Particle from '../components/Particle'

export default function ThirdSection() {
    return (
        <StyledThirdSection>
            <div className='third-section--content'>
                <Particle />
                <h2 className='third-section--heading'>Tech stack</h2>
                <div className='third-section--logos'>
                    <img src='../../public/images/js-logo.png' alt='' />
                    <img src='../../public/images/react-logo.png' alt='' />
                    <img src='../../public/images/sass-logo.png' alt='' />
                    <img src='../../public/images/css-logo.png' alt='' />
                    <img src='../../public/images/html-logo.png' alt='' />
                    <img src='../../public/images/vsc-logo.png' alt='' />
                    <img src='../../public/images/figma-logo.png' alt='' />
                    <img src='../../public/images/ts-logo.png' alt='' />
                    <img src='../../public/images/gh-logo.png' alt='' />
                    <img src='../../public/images/redux-logo.png' alt='' />
                    <img src='../../public/images/adobexd-logo.png' alt='' />
                    <img src='../../public/images/rwd-logo.png' alt='' />
                </div>
            </div>
        </StyledThirdSection>
    )
}