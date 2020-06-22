import React, { useContext, useEffect } from 'react'
import uuid from 'uuid/dist/v4'

import BoardStyles from './styles'

import { GameContext } from '../../contexts/gameContext'
import CalculateWinner from '../../utils/calculateWinner'

import Square from '../square'
import Player from '../player'
import Reset from '../reset'
import Winner from '../winner'
import History from '../history'

export default () => {
    const { squares, setWhoIsWinner, history } = useContext(GameContext)

    useEffect(() => {
        const winner = CalculateWinner(squares)

        if (winner) {
            setWhoIsWinner(winner)
        }
    }, [history, setWhoIsWinner, squares])

    return (
        <BoardStyles>
            <div className="wrapperTitle">
                <h1 className="titleBoard">Jogo da Velha</h1>
                <Player />
            </div>

            <div className="boardContainer">
                <div className="boardWrapper">
                    {squares.map((value, i) => (
                        <Square value={value} index={i} key={uuid()} />
                    ))}
                </div>
            </div>
            <Reset />
            <Winner />

            <History />
        </BoardStyles>
    )
}
