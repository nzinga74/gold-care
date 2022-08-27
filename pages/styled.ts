import styled from "styled-components";
export const Button = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: #e7ac4d;
  border: 0px;
  border-radius: 4px;
  font-weight: bold;
`;
export const PriceSection = styled.section`
  width: 100%;
  padding: 60px 0px;
  position: relative;
  .fly {
    width: 500px;
    height: 500px;
    position: absolute;
    top: 30%;
    right: 0;
    z-index: -2;
  }
  .title,
  .sub-title {
    text-align: center;
    color: #353551;
  }
  & > div {
    width: 80%;
    margin: 0 auto;
    height: auto;
    display: flex;

    .checking-side {
      width: 50%;
      background: #f9f9fb;
      border-radius: 10px;
      height: 400px;
      padding: 50px;
      text-align: left;
      h2 {
        color: #32324d !important;
        font-size: 24px;
      }
      p {
        font-size: 14px;
      }
    }
    .left-side {
    }
    .right-side {
      width: 50%;

      padding: 0px 30px;
      .send-button {
        width: 100%;
        margin-top: 20px;
        padding: 20px;
        border-radius: 8px;
        font-weight: bold;
        color: white;
        background-color: #e7ac4d;
        border: 0px;
        cursor: pointer;
      }
      .send-button:hover {
        filter: blur(2);
      }
    }
  }
  h2 {
    font-size: 18px;
    color: #e7ac4d !important;
    margin-bottom: 10px;
  }
  h3 {
    font-size: 30px;
    margin-bottom: 35px;
  }
  @media (max-width: 750px) {
    .fly {
      display: none;
    }
    & > div {
      flex-wrap: wrap;
    }
    .checking-side,
    .right-side {
      margin-top: 30px;
      width: 100% !important;
    }
    .right-side {
      padding: 0px !important;
    }
  }
`;

export const AboutSection = styled.section`
  width: 100%;
  display: flex;
  padding: 40px;

  .left-side {
    width: 60%;

    .img-container {
      position: relative;
      width: 100%;
      height: auto;
    }
    .round-btn {
      width: 80px;
      height: 80px;
      background-color: #e7ac4d;
      border-radius: 20px;
      position: absolute;
      left: -5.85%;
      justify-content: center;
      align-items: center;
      display: flex;

      top: 68.24%;
      bottom: 40.01%;
    }
    img {
      width: 80%;
    }
  }
  .right-side {
    width: 40%;
    h2 {
      font-size: 18px;
      color: #e7ac4d !important;
      margin-bottom: 10px;
    }
    h3 {
      font-size: 30px;
      margin-bottom: 20px;
    }
    p {
      font-size: 16px;
      line-height: 24px;
      color: #111144;
    }
  }
  @media (max-width: 750px) {
    & {
      flex-wrap: wrap;
    }
    .right-side,
    .left-side {
      width: 100%;
    }
    .round-btn {
      width: 60px !important;
      height: 60px !important;
      right: 0 !important ;
      bottom: 0% !important;
      left: 80% !important ;
    }
    img {
      width: 100% !important;
    }
  }
`;

export const FormPrice = styled.div`
  width: 100%;
  height: auto;
  border-top: 8px solid #e7ac4d;
  border-radius: 8px;
  display: flex;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  .left-side {
    width: 80%;
    button {
      padding: 10px;
      background: rgba(217, 217, 217, 0.35);
      border-radius: 15px;
      border: 0px;
      margin-top: 10px;
      color: #767676;
    }
  }
  .right-side {
    width: 20%;
    text-align: center;
    vertical-align: middle;
    p {
      color: #e7ac4d;
      font-size: 34px;
      font-weight: bold;
    }
  }
`;
