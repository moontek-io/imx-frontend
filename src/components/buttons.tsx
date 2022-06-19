import { Button, ButtonProps } from "react-bootstrap";
import styled from "styled-components";
import { ReactComponent as Arrow } from "assets/arrow-right.svg";

export const StyledButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: 0.857rem;
  font-size: 1.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0 2.5rem;
  height: 70px;
  border-radius: 0.75rem;
  box-shadow: 0 0 0 2px rgba(0, 95, 206, 0.17);
  &.btn-primary-outline {
    background-color: transparent;
  }

  /* animation-iteration-count: infinite; */
  &:hover {
    animation-name: bounce;
    /* animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1); */
    animation-duration: .75s;
  }
`;

interface Props extends ButtonProps {
  children: React.ReactNode;
  arrow?: boolean;
}
export const ActionButton = (props: Props) => {
  const { children, arrow = true, ...rest } = props;
  return (
    <StyledButton {...rest}>
      {children}
      {arrow && <Arrow />}
    </StyledButton>
  );
};
