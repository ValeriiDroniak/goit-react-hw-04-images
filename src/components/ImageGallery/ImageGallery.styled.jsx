import styled from '@emotion/styled';

export const GalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: ${p => p.theme.space[3]}px;
  justify-content: center;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
`;
