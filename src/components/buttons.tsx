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
`;

interface Props extends ButtonProps {
  children: React.ReactNode;
  arrow?: boolean;
}
export const ActionButton = (props: Props) => {
  const { children, arrow = true } = props;
  return (
    <StyledButton {...props}>
      {children}
      {arrow && <Arrow />}
    </StyledButton>
  );
};

// {
//   /* <Arrow /> */
// }
