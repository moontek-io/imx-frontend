import { ReactComponent as Logo } from "../assets/logo.svg";
import { NavLink } from "react-bootstrap";
import SocialMedia from "./SocialMedia";

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



export default Header;
