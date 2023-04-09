import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { StyledFirstSection } from './styles/FirstSection.styled'

export default function FirstSection() {
    const [hackerImage, setHackerImage] = useState('/images/hacker.png')

    useEffect( () => {
        const hackerContainer = document.querySelector('.hacker')
        setTimeout( () => hackerContainer.classList.add('flicker'), 1000)
        
        const photoChanging = setInterval( () => {
            setHackerImage( prevImage => {
                return prevImage === '/images/hacker.png' 
                       ? '/images/hackerwmask.png' 
                       : '/images/hacker.png'
            })
        }, 3000)
        return () => clearInterval(photoChanging)
    }, [])
    
    return (
        <StyledFirstSection>
            <ReactPlayer
                url="https://videos.mocortech.com/%E9%A6%96%E9%A1%B5%E8%A7%86%E9%A2%911080_1.mp4"
                width="100%"
                height="100%"
                autoPlay={true}
                muted={true}
                loop={true}
                playing={true}
            />
            <div className='first-section--content'>
                <h1>
                    The New
                    <br />
                    <span>Powerfulness</span>
                    <br />
                    In Your Dev Team
                </h1>
                <img src={hackerImage} alt='character in a hood with a mask' className='hacker' />
            </div>
        </StyledFirstSection>
    )
}