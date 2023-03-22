import React from 'react'

export default function Header() {
    return (
        <header>
            <div className='header-cont'>
                <div className='header-logo'>
                    <img src='./images/codesymbol.png' alt='symbol of coding, slash in angle brackets' />
                    <span></span>
                </div>
                <div className='header-settings'>
                    <span className='settings-lang'></span>
                    <span className='settings-mode'></span>
                    <span className='settings-burger'></span>
                </div>
            </div>
        </header>
    )
}