import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Medium } from "../assets/medium.svg";
import { ReactComponent as Telegram } from "../assets/telegram.svg";
import { ReactComponent as Discord } from "../assets/discord.svg";
import siteData from "data/siteData";
import { NavLink } from "react-bootstrap";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  a:hover {
    animation: bounce 1s ease-in-out;
  }
`;
const SocialMedia = () => (
  <Wrapper>
    <NavLink href={siteData.telegram} target="_blank">
      <Telegram />
    </NavLink>
    <NavLink href={siteData.discord} target="_blank">
      <Discord />
    </NavLink>
    <NavLink href={siteData.medium} target="_blank">
      <Medium />
    </NavLink>
    <NavLink href={siteData.twitter} target="_blank">
      <Twitter />
    </NavLink>
  </Wrapper>
);
export default SocialMedia;
