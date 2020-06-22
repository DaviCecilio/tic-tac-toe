import styled from 'styled-components'

export default styled.footer`
    position: relative;
    bottom: 0;
    width: 100%;
    margin-top: -60px;

    .shapeTopFooter {
        content: url(${(props) => props.backgroundTop});
    }

    .contentFooter {
        padding: 20px;

        display: flex;
        flex-direction: column;

        align-items: center;
        background-color: #89f73a;
        .logoFooter {
            width: 75px;
            transition: 0.1s all ease;
            :hover {
                transform: scale(1.1);
            }
        }
    }
`
