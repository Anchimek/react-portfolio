import React from 'react'
import { StyledContainer } from './styles/Container.styled'
import Header from './Header'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import FourthSection from './FourthSection'

export default function Container() {
    return (
        <StyledContainer>
            <main>
                <div className='banner'>
                    <p>
                        <span>Message me: </span>
                        <span>jakub.anchimowicz@gmail.com </span>
                        <span className='space'>\</span>
                        <a 
                            href='https://www.github.com/anchimek' 
                            target='_blank'
                            rel='noreferrer'
                        >
                            github
                        </a>
                        <span className='space'>\</span>
                        <a 
                            href='https://www.linkedin.com/in/jakub-anchimowicz-478780154/' 
                            target='_blank'
                            rel='noreferrer'
                        >
                            linkedin
                        </a>
                        <span className='space'>\</span>
                        <a 
                            href='https://www.instagram.com' 
                            target='_blank'
                            rel='noreferrer'
                        >
                            instagram
                        </a>
                    </p> 
                </div>
                <Header />
                <div className='container'>
                    <FirstSection />
                    <SecondSection />
                    <ThirdSection />
                    <FourthSection />
                </div>
            </main>
        </StyledContainer>
    )
}