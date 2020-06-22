import React from 'react'
import FooterStyle from './styles'

import Logo from '../../assets/images/logoDark.png'
import BackgroundCustom from '../../assets/images/background/footerBackground.svg'

export default () => (
    <FooterStyle backgroundTop={BackgroundCustom}>
        <div className="shapeTopFooter" />
        <div className="contentFooter">
            <a href="https://www.linkedin.com/in/davicecilio/">
                <img src={Logo} alt="Logomarca - Davi Cecílio" className="logoFooter" />
            </a>
            <p className="mt-2 fontSubTitle">Davi Cecílio - Desenvolvedor Web</p>
        </div>
    </FooterStyle>
)
