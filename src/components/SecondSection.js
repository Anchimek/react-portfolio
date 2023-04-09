import React from 'react'
import { StyledSecondSection } from './styles/SecondSection.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function SecondSection() {
    return (
        <StyledSecondSection>
            <div className='second-section--content'>
                <h2>projects</h2>
                <div className='second-section--project'>
                    <h3>
                        <span>Crypto </span>
                        market
                    </h3>
                    <h4>ReactJS</h4>
                    <img src='../../public/images/crypto.png' alt='home page of crypto market site' />
                    <p>
                        Simple React App which allows to check current prices of crypto.
                        You can choose currency, switch between light/dark mode and check 
                        F&G index. You can also read news 
                        from crypto.
                        &nbsp;&nbsp;&nbsp;
                        <a 
                            href='https://anchimek.github.io/react-crypto-market/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            visit website 
                            &nbsp;
                            <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </p>
                </div>
                <div className='second-section--project'>
                    <h3>
                        <span>Pacman </span>
                        game
                    </h3>
                    <h4>JavaScript</h4>
                    <img src='../../public/images/pacman.png' alt='home page of check knowledge site' />
                    <p>
                        Project made just with pure JavaScript. I've used ES6 methods.
                        Template was create with grid and flex-box in preprocessor SaSS.
                        &nbsp;&nbsp;&nbsp;
                        <a 
                            href='https://anchimek.github.io/pacman-game/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            visit website 
                            &nbsp;
                            <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </p>
                </div>
                <div className='second-section--project'>
                    <h3>
                        <span>commercial </span>
                        site
                    </h3>
                    <h4>JavaScript</h4>
                    <img src='../../public/images/commercial.png' alt='home page of ewaminczewska.pl site' />
                    <p>
                        This website was made for makeup artist. Layout I've prepared in Figma,
                        also I've used ES6 methods. Template was create with grid and flex-box in preprocessor SaSS.
                        &nbsp;&nbsp;&nbsp;
                        <a 
                            href='https://anchimek.github.io/commercial-em/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            visit website 
                            &nbsp;
                            <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </p>
                </div>
                <div className='second-section--project'>
                    <h3>
                        <span>Check </span>
                        knowledge
                    </h3>
                    <h4>ReactJS</h4>
                    <img src='../../public/images/knowledge.png' alt='home page of check knowledge site' />
                    <p>
                        Project made in React with Open Trivia DB, which allows you to test your knowledge.
                        You can answer the questions in quiz, check which answers are correct or 
                        draw a new set of questions.
                        &nbsp;&nbsp;&nbsp;
                        <a 
                            href='https://anchimek.github.io/react-check-your-knowledge/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            visit website 
                            &nbsp;
                            <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </p>
                </div>
                <div className='second-section--project'>
                    <h3>
                        <span>Snake </span>
                        game
                    </h3>
                    <h4>JavaScript</h4>
                    <img src='../../public/images/snake.png' alt='home page of check knowledge site' />
                    <p>
                        Project made just with pure JavaScript. I've used ES6 methods.
                        Template was create with grid and flex-box in preprocessor SaSS.
                        &nbsp;&nbsp;&nbsp;
                        <a 
                            href='https://anchimek.github.io/snake-game/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            visit website 
                            &nbsp;
                            <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </p>
                </div>
            </div>
        </StyledSecondSection>
    )
}