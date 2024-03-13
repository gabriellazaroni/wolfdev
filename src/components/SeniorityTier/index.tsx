import React from 'react';

import { SeniorityTierContainer, SeniorityTierStarsBox } from './styles';

import { ReactComponent as StarIcon } from '../../assets/icons/star.svg';

interface SeniorityTierProps {
  tier: 1 | 2 | 3;
}

export const SeniorityTier = ({ tier }: SeniorityTierProps) => {
  switch (tier) {
    case 1:
      return (
        <SeniorityTierContainer>
          <SeniorityTierStarsBox>
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </SeniorityTierStarsBox>
          <span>Sênior</span>
        </SeniorityTierContainer>
      );
    case 2:
      return (
        <SeniorityTierContainer>
          <SeniorityTierStarsBox>
            <StarIcon />
            <StarIcon />
          </SeniorityTierStarsBox>
          <span>Pleno</span>
        </SeniorityTierContainer>
      );
    case 3:
      return (
        <SeniorityTierContainer>
          <SeniorityTierStarsBox>
            <StarIcon />
          </SeniorityTierStarsBox>
          <span>Júnior</span>
        </SeniorityTierContainer>
      );
  }
};

export default SeniorityTier;
