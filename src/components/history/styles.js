import styled from 'styled-components'

export const HistoryContainer = styled.div`
    .historyViewBtn {
        border: 1px solid #587b7f;
        background-color: #587b7f;

        color: #ffffff;
    }
`

export const HistoryModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    max-height: 400px;

    .wrapperButtonHistory {
        overflow-y: auto;
        padding: 5px 30px;
        ::-webkit-scrollbar {
            width: 10px;
        }
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
            background: #888;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
        .historyBtn {
            text-align: center;
            border: 1px solid #5aa03e;
            background-color: #5aa03e;

            color: #ffffff;
        }
    }
`
