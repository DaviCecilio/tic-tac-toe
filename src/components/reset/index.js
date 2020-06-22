import React, { useContext } from 'react'
import t from 'prop-types'
import { GameContext } from '../../contexts/gameContext'

import ResetContainer from './styles'

const Reset = ({ title }) => {
    const { setSquares, setIsXNext, setWhoIsWinner, setHistory } = useContext(GameContext)

    function handleClick() {
        setIsXNext(true)
        setSquares(Array(9).fill(null))
        setWhoIsWinner(null)
        setHistory([])
    }
    return (
        <ResetContainer>
            <p className="reset">
                <button className="btn btnReset" type="button" onClick={handleClick}>
                    {title ?? 'RESET'}
                </button>
            </p>
        </ResetContainer>
    )
}

Reset.propTypes = {
    title: t.string.isRequired,
}

export default Reset
