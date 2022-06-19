import styled from "styled-components";

const GlassCard = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 75px 50px;
  margin: auto;
  backdrop-filter: blur(4px);
  background: rgba(0, 0, 0, 0.04);
  border: solid 1px rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  transition: all 2s;
  &:hover {
    border-radius: 0.5rem;
    animation-name: blurAnimation;
    animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
    animation-duration: 5s;
    animation-iteration-count: infinite;
    box-shadow: 0 0 60px rgb(0, 0, 0, 0.2);
  }
`;
export default GlassCard;
