import { BannerContainer, Button } from "./styled";

const Banner = () => {
  return (
    <BannerContainer>
      <div className="left-sider">
        <div>
          <h1>Covid Acute Care</h1>
          <h2>Got COVID-19 and need urgent care? GoldCare™ is here for you</h2>
          <p>
            If you have COVID-19 symptoms and require immediate attention, with
            our online scheduling availability, you can select a time convenient
            for you for your urgent care. You can rest assured knowing that any
            care, services, medicines, or products will be recommended only if
            it’s in your best interest—and for no other reason, because we don’t
            allow government or insurance to control healthcare decisions
          </p>
          <Button>Get Care Now</Button>
        </div>
      </div>
      <div className="right-sider">
        <div className="banner-img-container">
          <img src="/img2.png" />
          <div className="round-btn-banner">
            <img src="/icon3.png" />
          </div>
        </div>
      </div>
    </BannerContainer>
  );
};
export default Banner;
