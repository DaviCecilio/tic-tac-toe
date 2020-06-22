import React, { useContext } from 'react'
import t from 'prop-types'
import { GameContext } from '../../contexts/gameContext'

import RickPerson from '../../assets/images/rickPerson.svg'
import MortyPerson from '../../assets/images/mortyPerson.svg'

const Square = ({ value, index }) => {
    const {
        squares,
        setSquares,
        isXNext,
        setIsXNext,
        whoIsWinner,
        setHistory,
        history,
    } = useContext(GameContext)

    function handleClick() {
        if (squares[index]) return
        if (whoIsWinner) return

        const newSquares = [...squares]
        newSquares[index] = isXNext ? 'X' : 'O'

        setSquares(newSquares)
        setIsXNext(!isXNext)

        setHistory([
            ...history,
            {
                squares: [...squares],
                isNext: !isXNext,
                whoIsWinner,
            },
        ])
    }
    return (
        <button type="button" onClick={handleClick}>
            {/* eslint-disable-next-line no-nested-ternary */}
            {value === 'O' ? (
                <img src={MortyPerson} alt="Morty - Person" />
            ) : value === 'X' ? (
                <img src={RickPerson} alt="Rick - Person" />
            ) : null}
        </button>
    )
}

Square.defaultProps = {
    value: null,
}

Square.propTypes = {
    value: t.string,
    index: t.number.isRequired,
}

export default Square
