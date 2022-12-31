import styled from '@emotion/styled';

export const GalleryItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 4 - ${p => p.theme.space[4]}px);
  height: 175px;
  overflow: hidden;

  border-radius: calc(${p => p.theme.space[1]}px / 2);
  box-shadow: ${p => p.theme.shadows.imageItem};
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: ${p => (p.cover ? '100%' : 'auto')};
  /* object-fit: ${p => p.cover && 'cover'};
  transition: ${p => p.cover && `transform ${p.theme.transitions.cub}`}; */
  ${p =>
    p.cover &&
    `
    object-fit: cover;
    transition: transform ${p.theme.transitions.cub};

    &:hover {
      transform: scale(1.03);
      cursor: zoom-in;
    }
    `}
`;
