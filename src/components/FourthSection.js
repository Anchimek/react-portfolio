import React from 'react'
import { StyledFourthSection } from './styles/FourthSection.styled'

export default function FourthSection() {
    return (
        <StyledFourthSection>
            <div className='fourth-section--content'>
                <h2>Check me out</h2>
                <div className='fourth-section--media'>
                    <img src='/images/gh-logo.png' alt='' />
                    <img src='/images/insta-logo.png' alt='' />
                    <img src='/images/linkedin-logo.png' alt='' />
                </div>

                <div className='fourth-section--infos'>
                    <p>
                        If You want to hire me please message me. 
                        You can do it via email <span>jakub.anchimowicz@gmail.com</span>, 
                        this is the easiest way.
                        However You can also write DM on Instagram, LinkedIn or GH.
                    </p>
                    <p> 
                        Website was created by using ReactJS. All rights reserved.
                    </p>
                </div>
            </div>
        </StyledFourthSection>
    )
}