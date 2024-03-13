import styled from 'styled-components';

export const SeniorityTierContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 15rem;

  padding: 2rem;

  border-radius: 0.5rem;
  border: 1px solid var(--white);

  transition: all 0.2s;

  cursor: pointer;

  &:hover {
    border: 1px solid var(--purple-500);
  }

  > span {
    color: var(--white);

    font-size: clamp(0.4rem, 0.8rem + 0.8vw, 2rem);
    font-weight: 400;

    margin-top: 0.5rem;
  }
`;

export const SeniorityTierStarsBox = styled.div`
  svg + svg {
    margin-left: 0.5rem;
  }
`;
