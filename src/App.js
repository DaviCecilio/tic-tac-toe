import React from 'react'
import GlobalStyle from './assets/styles/globalStyle'
import Home from './pages/home'
import Footer from './components/footer'

export default () => {
    return (
        <>
            <GlobalStyle />
            <div className="contentPage">
                <Home />
                <Footer />
            </div>
        </>
    )
}
