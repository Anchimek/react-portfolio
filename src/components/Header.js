import React, { useContext } from 'react'
import { StyledHeader } from './styles/Header.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { Context } from './Context'

export default function Header() {
    const { lang } = useContext(Context)
    return (
        <StyledHeader>
            <div className='header-cont'>
                <div className='header-logo'>
                    <img src='./images/codesymbol.png' alt='symbol of coding, slash in angle brackets' />
                    <span>anchimek</span>
                    <span className='color'>dev</span>
                </div>
                <div className='header-settings'>
                    <span className='settings-lang' onClick={console.log(lang)}>PL</span>
                    <span className='settings-mode'>
                    <FontAwesomeIcon icon={faLightbulb} />   
                    </span>
                </div>
            </div>
        </StyledHeader>
    )
}