import styled from '@emotion/styled';

export const LoadmoreButton = styled.button`
  cursor: pointer;
  display: inline-block;
  min-width: 180px;
  text-align: center;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  text-decoration: none;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.heading};
  line-height: 1.333;
  border: ${p => p.theme.radii.none};
  border-radius: ${p => p.theme.radii.normal / 2};
  box-shadow: ${p => p.theme.shadows.button};

  transition: background-color ${p => p.theme.transitions.cub};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accent};
  }
`;
