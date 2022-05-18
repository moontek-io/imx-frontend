import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Medium } from "../assets/medium.svg";
import { ReactComponent as Telegram } from "../assets/telegram.svg";
import { ReactComponent as Discord } from "../assets/discord.svg";
import { Container, NavLink } from "react-bootstrap";

function Header() {
  return (
    <header className="container">
      <div className="d-flex flex-lg-row flex-column justify-content-lg-between pt-4 align-items-center gap">
        <NavLink className="logo">
          <Logo />
        </NavLink>
        <SocialMedia />
      </div>
    </header>
  );
}

const SocialMedia = () => (
  <div className="social-links d-flex">
    <NavLink href="" target="_blank">
      <Telegram />
    </NavLink>
    <NavLink href="" target="_blank">
      <Discord />
    </NavLink>
    <NavLink href="" target="_blank">
      <Medium />
    </NavLink>
    <NavLink href="" target="_blank">
      <Twitter />
    </NavLink>
  </div>
);

export default Header;
