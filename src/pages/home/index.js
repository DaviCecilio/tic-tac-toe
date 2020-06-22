import React from 'react'
import GameContextProvider from '../../contexts/gameContext'

import Board from '../../components/board'

import HomeContainer from './styles'

export default () => {
    return (
        <GameContextProvider>
            <HomeContainer>
                <Board />
            </HomeContainer>
        </GameContextProvider>
    )
}
