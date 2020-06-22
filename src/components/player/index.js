import React, { useContext } from 'react'
import { GameContext } from '../../contexts/gameContext'

import ContainerPlayer from './styles'

export default () => {
    const { isXNext } = useContext(GameContext)
    return (
        <ContainerPlayer>
            <h1>Player: {isXNext ? 'RICK' : 'MORTY'}</h1>
        </ContainerPlayer>
    )
}
