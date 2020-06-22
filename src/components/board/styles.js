import styled from 'styled-components'
import BackgroundRM from '../../assets/images/background/backgroundRM.jpg'
import CustomShape from '../../assets/images/background/divCustom.svg'

export default styled.div`
    background-image: url(${BackgroundRM});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    backdrop-filter: blur(2px);

    .wrapperTitle {
        margin: 0px auto;
        padding: 15px;

        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 320px;
        height: 220px;
        background-image: url(${CustomShape});
        background-position: center;
        background-repeat: no-repeat;
        background-size: auto;

        .titleBoard {
            width: auto;

            font-family: 'Get Schwifty';
            text-transform: uppercase;
            font-size: 45px;
            color: #3febcf;
            margin: 20px 0 25px;
            text-shadow: 0.02em 0.02em 0.02em #89f73a, -0.02em -0.02em 0.02em #89f73a,
                0 0 0.2em #89f73a;
            animation: textShadow 2s linear infinite alternate;
        }
    }

    .boardContainer {
        width: 30vw;
        min-width: 310px;
        margin: 0 auto;

        .boardWrapper {
            display: grid;
            grid-template-columns: repeat(3, 1fr);

            button {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                font-size: 8vw;
                background: none;
                border: 1px solid #989fb8;

                cursor: pointer;
                ::after {
                    content: '';
                    display: block;
                    padding-bottom: 100%;
                }
            }
        }
    }
`
