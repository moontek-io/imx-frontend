import { useAuth } from "contexts/auth-context";
import styled from "styled-components";
import cns from "classnames";
import { STEPPER } from "const/stepper";
import { useLocation } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
  ul {
    gap: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: column;
      margin-bottom: 1rem;
    }
    li {
      &.disabled {
        opacity: 0.5;
        pointer-events: none;
      }
      .menuItem {
        text-transform: uppercase;
        text-decoration: none;
        font-family: ${(props) => props.theme.font.secondary};
        font-size: 1.125rem;
        font-weight: 500;
        color: #161c24;
        padding: 0.65rem 1.5rem;
      }
      &.active {
        font-weight: 700;
        .menuItem {
          display: block;
          background: rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(24px);
          border-radius: 5px 5px 0px 0px;
          border: 2px solid rgba(255, 255, 255, 0.5);
          border-bottom: none;
          position: relative;
          &:after {
            content: "";
            width: 100%;
            height: 2px;
            background: rgb(0, 100, 172);
            background: linear-gradient(
              90deg,
              rgba(0, 100, 172, 0) 0%,
              rgba(0, 100, 172, 1) 25%,
              rgba(0, 100, 172, 1) 75%,
              rgba(0, 100, 172, 0) 100%
            );
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
          }
        }
      }
    }
  }
`;

function BottomNavigation() {
  const { activeStep } = useAuth();
  const location = useLocation();
  const menuItems = STEPPER.filter((item) => item.id !== "default");
  return (
    <Wrapper>
      <ul className="list-unstyled mb-0">
        {menuItems.map(({ id, label, path }) => (
          <li
            key={id}
            className={cns({
              active: location.pathname.includes(path),
              disabled: activeStep.disabled?.includes(id),
            })}
          >
            <span className="menuItem">{label}</span>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

export default BottomNavigation;
