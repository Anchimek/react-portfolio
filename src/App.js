import React from 'react'
import Header from './Header'
import { Container } from './components/styles/Container.styled'
import { GlobalStyles } from './components/styles/GlobalStyles'

export default function App() {
    return (
        <>
        <GlobalStyles>
            <Container>
                <Header />
            </Container>
        </GlobalStyles>
        </>
    )
}