import React, { useContext, useState } from 'react'
import uuid from 'uuid/dist/v4'
import Modal from 'react-modal'
import Lottie from 'react-lottie'

import { GameContext } from '../../contexts/gameContext'

import portalAnimation from '../../assets/animations/portalAnimation.json'

import { HistoryContainer, HistoryModal } from './styles'

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
    animationData: portalAnimation,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
}

export default () => {
    const { history, setIsXNext, setSquares, setHistory, setWhoIsWinner } = useContext(GameContext)
    const [openModal, setOpenModal] = useState(false)

    function handleClick(i) {
        const newHistory = [...history]

        newHistory.splice(i, Number.MAX_SAFE_INTEGER)
        setHistory(newHistory)

        setSquares(history[i].squares)
        setIsXNext(history[i].squares)

        setWhoIsWinner(history[i].whoIsWinner)
        setOpenModal(!openModal)
    }
    function handleShow() {
        setOpenModal(!openModal)
    }

    return (
        <HistoryContainer>
            <div>
                <button type="button" className="btn historyViewBtn" onClick={() => handleShow()}>
                    View History
                </button>
            </div>

            <Modal
                isOpen={openModal}
                onRequestClose={handleShow}
                style={customModal}
                contentLabel="History Match"
            >
                <HistoryModal>
                    <h1 className="fontTitle">History</h1>
                    <p className="fontSubTitle">Click the buttons to go back in time </p>
                    <Lottie options={defaultOptions} height={200} width={200} />

                    <div className="wrapperButtonHistory">
                        {history.length > 0 ? (
                            history.map((data, i) => (
                                <div key={uuid()} className="wrapperHistory">
                                    <button
                                        type="button"
                                        className="btn historyBtn"
                                        onClick={() => handleClick(i)}
                                    >
                                        Back to move: {i}
                                    </button>
                                </div>
                            ))
                        ) : (
                            <h2 className="fontSubTitle fontDanger">No play was made </h2>
                        )}
                    </div>
                </HistoryModal>
            </Modal>
        </HistoryContainer>
    )
}
