import styled from 'styled-components'

export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 36px;
  align-items: center;
  gap: 18px;
  @media (max-width: 700px) {
    margin-top: 0px;
  }
`

export const CirclePhotoContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  padding: 8px;
  background: conic-gradient(
    var(--purple-500) 0deg 120deg,
    var(--gray-600) 120deg 240deg
  );
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 8px;
    right: 8px;
    bottom: 8px;
    background-color: var(--gray-700);
    border-radius: 50%;
  }
`

export const PhotoImg = styled.img`
  position: relative;
  border-radius: 50%;
  width: calc(100% - 16px);
  height: calc(100% - 16px);
  object-fit: cover;
  z-index: 1;
`
