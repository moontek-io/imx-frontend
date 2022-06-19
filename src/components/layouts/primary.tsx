import Footer from "../Footer";
import styled from "styled-components";
import Header from "../Header";
import cns from "classnames";
import { Outlet } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #000 url(/images/bg.png) no-repeat;

  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .content {
    position: relative;
    margin-top: 4rem;
  }
  background-position: 0 0;
  animation-name: background;
  animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
  animation-duration: 15s;
  animation-iteration-count: infinite;
  box-shadow: 0 0 60px rgb(0, 0, 0, 0.2);
`;

function PrimaryLayout({
  // children,
  className,
}: {
  // children: React.ReactNode;
  className?: string;
}) {
  return (
    <Wrapper>
      <Header />
      <main className={cns("content", className)}>
        <Outlet />
      </main>
      <Footer />
    </Wrapper>
  );
}

export default PrimaryLayout;
