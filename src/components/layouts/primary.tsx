import Footer from "../Footer";
import styled from "styled-components";
import Header from "../Header";
import cns from "classnames";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #000 url(/images/bg.png) no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .content {
    position: relative;
  }
`;

function PrimaryLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Wrapper>
      <Header />
      <main className={cns("content", className)}>{children}</main>
      <Footer />
    </Wrapper>
  );
}

export default PrimaryLayout;
