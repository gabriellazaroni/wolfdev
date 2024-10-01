import Modal from 'react-modal'
import styled from 'styled-components'

export const StyledModal = styled(Modal)`
  &.react-auth-modal-content {
    overflow: auto;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 39.812rem;
    max-height: 80%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: var(--gray-700);
    -webkit-overflow-scrolling: auto;
    border-radius: 20px;
    outline: none;
    padding: 25px 30px;
  }
`
