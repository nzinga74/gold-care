import styled from "styled-components";

export const FooterSection = styled.div`
  width: 100%;
  padding: 30px 60px;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }
  img {
    width: 252px;
    height: 42px;
  }
  p {
    vertical-align: middle;
    font-size: 12px;
    margin-left: 40px;
    color: #353551;
  }

  @media (max-width: 931px) {
    p {
      display: none;
    }
  }
  @media (max-width: 629px) {
    & {
      padding: 30px 0px;
      justify-content: center;
    }
    p,
    button {
      display: none;
    }
  }
`;
