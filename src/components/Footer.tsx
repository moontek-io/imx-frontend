import siteData from "data/siteData";
import { NavLink } from "react-bootstrap";
import styled from "styled-components";
const FooterWrapper = styled.footer`
  backdrop-filter: blur(10px) brightness(0.98);
  a {
    color: #000;
  }
`;
const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.7) 50%,
    rgba(255, 255, 255, 0) 100%
  );
`;
function Footer() {
  return (
    <div>
      <Divider />
      <FooterWrapper className="d-flex justify-content-center align-items-center p-2">
        <NavLink href={siteData.terms}>Terms & Conditions</NavLink> |{" "}
        <NavLink href="">powered by moontek.io</NavLink>
      </FooterWrapper>
    </div>
  );
}

export default Footer;
