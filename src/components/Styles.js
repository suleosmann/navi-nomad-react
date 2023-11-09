import styled from "styled-components";

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 80%;
  bottom: 40px;
  height: 24px;
  font-size: 3.6rem;
  z-index: 1;
  cursor: pointer;
  color: #f5811c;
  @media (min-width: 768px) {
    left: 91%;
  }
  @media (min-width: 992px) {
    left: 93%;
  }
  @media (min-width: 1200px) {
    left: 94.65%;
  }
`;
