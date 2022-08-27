import styled from "styled-components";
export const NavBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 60px 0px;
  img {
    width: 252px;
    height: 42px;
  }
`;
export const Button = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: #e7ac4d;
  border: 0px;
  border-radius: 4px;
  font-weight: bold;
`;

export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 60px 0px;

  .left-sider {
    padding-right: 200px;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      font-size: 40px;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 17px;
      margin-bottom: 20px;
    }
    p {
      font-size: 14px;
      line-height: 22px;
      text-align: justify;
      margin-bottom: 20px;
    }
  }
  .right-sider {
    width: 40%;
    img {
      width: 100%;
    }
    .banner-img-container {
      position: relative;
      width: 100%;
      height: auto;
    }

    .round-btn-banner {
      width: 80px;
      height: 80px;
      background-color: #e7ac4d;
      border-radius: 20px;
      position: absolute;
      bottom: 20%;
      left: 37%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
  @media (max-width: 955px) {
    .left-sider {
      padding: 30px;
    }
  }
  @media (max-width: 700px) {
    & {
      flex-wrap: wrap-reverse;
      text-align: center;
    }
    .left-sider {
      padding: 0px;
      width: 100%;
    }
    .right-sider {
      width: 100%;
      img {
        width: 90%;
      }
    }
  }
`;
