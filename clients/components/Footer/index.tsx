import { FooterSection } from "./styled";
import ButtonIcon from "../ButtonIcon";
const Footer = () => {
  return (
    <FooterSection>
      <div>
        <img src="/logo.png" />
        <p>
          Copyright © 2022 GoldCare™ - Health & Wellness. All rights reserved.
        </p>
      </div>
      <ButtonIcon text="Join Now" />
    </FooterSection>
  );
};

export default Footer;
