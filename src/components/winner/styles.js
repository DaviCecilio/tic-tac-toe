import styled from 'styled-components'

export default styled.div`
    padding: 10px 0px;
    text-align: center;
    .winnerIcon {
        width: 15vw;
    }
    .titleWinner {
        margin: 15px 0;
        font-family: 'Calligraphr';
        font-size: 1.5em;
    }

    .animationWin {
        width: 30vw;
        max-width: 350px;
        box-shadow: 2px 2px 2px 2px #d8e7ee;
    }

    .wrapperBtn {
        .btnCloseModal {
            margin: 10px 10px;
            padding: 10px 30px;

            border-radius: 3px;
            border: 1px solid #3ab795;
            background-color: #3ab795;
            color: #393737;
            font-weight: bold;
            letter-spacing: 3px;
            text-transform: uppercase;

            cursor: pointer;
        }
    }
`
