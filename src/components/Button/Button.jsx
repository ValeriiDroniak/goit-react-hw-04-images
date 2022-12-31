import { LoadmoreButton } from './Button.styled';

export const Button = ({ children, onClick }) => {
  return (
    <LoadmoreButton type="button" onClick={onClick}>
      {children}
    </LoadmoreButton>
  );
};
