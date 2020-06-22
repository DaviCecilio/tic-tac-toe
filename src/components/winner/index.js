import React, { useState, useEffect, useContext } from 'react'
import Modal from 'react-modal'
import Lottie from 'react-lottie'
import winAnimation from '../../assets/animations/trophyAnimation.json'
import RickWin from '../../assets/animations/rickWin.gif'
import MortyWin from '../../assets/animations/mortyWin.gif'

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

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: winAnimation,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
}

export default () => {
    const { whoIsWinner } = useContext(GameContext)
    const [isShow, setIsShow] = useState(false)
    const winnerPerson = whoIsWinner === 'X' ? 'Rick' : 'Morty'

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
            contentLabel="Example Modal"
        >
            <WinnerContainer>
                {/* <Lottie options={defaultOptions} height={225} width={225} /> */}
                <img
                    className="animationWin"
                    src={whoIsWinner === 'X' ? RickWin : MortyWin}
                    alt={`${whoIsWinner === 'X' ? 'Rick' : 'Morty'} - Win`}
                />
                <h1 className="titleWinner">{`${winnerPerson} Won !`}</h1>
                <div className="wrapperBtn">
                    <button type="button" className="btnCloseModal" onClick={closeModal}>
                        Match history
                    </button>
                    <Reset title="Play Again" />
                </div>
            </WinnerContainer>
        </Modal>
    )
}
