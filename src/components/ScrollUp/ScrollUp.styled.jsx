import styled from '@emotion/styled';

export const ScrollUpBtn = styled.button`
  position: fixed;
  bottom: ${p => p.theme.space[5]}px;
  right: ${p => p.theme.space[5]}px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${p => p.theme.space[4] + 16}px;
  height: ${p => p.theme.space[4] + 16}px;

  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};
  border: none;
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;
  opacity: 0.7;

  transition: background-color ${p => p.theme.transitions.cub};

  &:hover,
  &:focus {
    opacity: 1;
  }

  svg {
    width: ${p => p.theme.space[4]}px;
    height: ${p => p.theme.space[4]}px;
    fill: currentColor;
  }
`;
