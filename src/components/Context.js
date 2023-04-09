import React, { useState } from 'react'

const Context = React.createContext()

function ContextProvider(props) {
    const [lang, setLang] = useState('EN')

    function switchLang() {
        setLang( prevVal => prevVal === 'EN' ? 'PL' : 'EN')
    }

    return (
        <Context.Provider value= {
            {
                lang,
                switchLang
            }
        }>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }