import styled from '@emotion/styled';

export const GalleryList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: ${p => p.theme.space[3]}px;
  margin: ${p => p.theme.space[4]}px auto;
  padding: ${p => p.theme.space[0]};
  list-style: none;
`;
