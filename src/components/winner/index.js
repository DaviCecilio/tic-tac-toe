import React, { useState, useEffect, useContext } from 'react'
import Modal from 'react-modal'
import RickWin from '../../assets/animations/rickWin.gif'
import MortyWin from '../../assets/animations/mortyWin.gif'
import Tie from '../../assets/animations/tieWin.gif'

import { GameContext } from '../../contexts/gameContext'
import Reset from '../reset'

import WinnerContainer from './styles'

const customModal = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

export default () => {
    const { whoIsWinner } = useContext(GameContext)
    const [isShow, setIsShow] = useState(false)
    const winnerPerson =
        // eslint-disable-next-line no-nested-ternary
        whoIsWinner === 'X' ? 'Rick Won' : whoIsWinner === 'O' ? 'Morty Won' : 'Gave a Tie'

    useEffect(() => {
        if (whoIsWinner) setIsShow(true)
        else setIsShow(false)
    }, [whoIsWinner])

    function closeModal() {
        setIsShow(false)
    }

    return (
        <Modal
            isOpen={isShow}
            onRequestClose={closeModal}
            style={customModal}
            contentLabel="Player Won"
        >
            <WinnerContainer>
                <img
                    className="animationWin"
                    src={
                        // eslint-disable-next-line no-nested-ternary
                        whoIsWinner === 'X' ? RickWin : whoIsWinner === 'O' ? MortyWin : Tie
                    }
                    alt={winnerPerson}
                />
                <h1 className="fontTitle">{`${winnerPerson} !`}</h1>
                <div className="wrapperBtn">
                    <Reset title="Play Again" />
                    <button type="button" className="btnCloseModal " onClick={() => closeModal()}>
                        Close
                    </button>
                </div>
            </WinnerContainer>
        </Modal>
    )
}
