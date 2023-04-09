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
                    <img src='/images/js-logo.png' alt='' />
                    <img src='/images/react-logo.png' alt='' />
                    <img src='/images/sass-logo.png' alt='' />
                    <img src='/images/css-logo.png' alt='' />
                    <img src='/images/html-logo.png' alt='' />
                    <img src='/images/vsc-logo.png' alt='' />
                    <img src='/images/figma-logo.png' alt='' />
                    <img src='/images/ts-logo.png' alt='' />
                    <img src='/images/gh-logo.png' alt='' />
                    <img src='/images/redux-logo.png' alt='' />
                    <img src='/images/adobexd-logo.png' alt='' />
                    <img src='/images/rwd-logo.png' alt='' />
                </div>
            </div>
        </StyledThirdSection>
    )
}