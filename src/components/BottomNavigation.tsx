import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const MENU_ITEMS = [
  {
    id: "connect",
    label: "Connect wallet",
    path: "/connect",
  },
  {
    id: "join-discord",
    label: "Join discord",
    path: "/discord",
  },
  {
    id: "add-email",
    label: "Add Email",
    path: "/add-email",
  },
  {
    id: "claim-nft",
    label: "Claim Your nft",
    path: "/claim-nft",
  },
  {
    id: "invite-friends",
    label: "Invite your friend",
    path: "/invite",
  },
];

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
  ul {
    display: flex;
    justify-items: center;
    gap: 1.5rem;
    li {
      a {
        text-transform: uppercase;
        text-decoration: none;
        font-family: ${(props) => props.theme.font.secondary};
        font-size: 1.125rem;
        font-weight: 500;
        color: #161c24;
        line-height: 45px;
        padding: 0 1.5rem;
      }
      &.active {
        font-weight: 700;
        a {
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
  const location = useLocation();

  return (
    <Wrapper>
      <ul className="list-unstyled mb-0">
        {MENU_ITEMS.map(({ id, label, path }) => (
          <li
            key={id}
            className={location.pathname?.includes(path) ? "active" : ""}
          >
            <Link to={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

export default BottomNavigation;
