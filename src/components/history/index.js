import React, { useContext } from 'react'
import uuid from 'uuid/dist/v4'
import { GameContext } from '../../contexts/gameContext'

import HistoryContainer from './styles'

export default () => {
    const { history, setIsXNext, setSquares, setHistory, setWhoIsWinner } = useContext(GameContext)

    function handleClick(i) {
        const newHistory = [...history]

        newHistory.splice(i, Number.MAX_SAFE_INTEGER)
        setHistory(newHistory)

        setSquares(history[i].squares)
        setIsXNext(history[i].squares)

        setWhoIsWinner(history[i].whoIsWinner)
    }
    return (
        <HistoryContainer>
            {history.map((data, i) => (
                <div key={uuid()}>
                    <button type="button" className="btn historyBtn" onClick={() => handleClick(i)}>
                        Voltar para jogada: {i}
                    </button>
                </div>
            ))}
        </HistoryContainer>
    )
}
